import express from "express";
import { pool, check } from "./db/conn.js";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";
import env from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { dirname, join } from "path";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use('/uploads',express.static('uploads'));
app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.use(cors());
env.config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// app.get("/blog", async (req, res) => {
//   try {
//     const result = await pool.query("Select * from blogs");
//     res.json({ "data": result.rows });
//   } catch (err) {
//     console.error("Error executing query:", err);
//   }
// });
app.get("/blog/:cat", async (req, res) => {
  try {
    const result = await pool.query(
      req.params.cat != "all"
        ? `Select * from blogs where category ='${req.params.cat}'`
        : "Select * from blogs"
    );
    // console.log("Retrieved Blogs:", result.rows);
    res.json({ data: result.rows });
  } catch (err) {
    console.error("Error executing query:", err);
  }
});
app.get("/blogbyid/:id", async (req, res) => {
  try {
    const result = await pool.query("Select * from blogs where id = $1", [
      req.params.id,
    ]);
    res.json({ data: result.rows });
  } catch (err) {
    console.error("Error executing query:", err);
  }
});

app.post("/blog", async (req, res) => {
  try {
    const result = await pool.query(
      "Insert into blogs (title, image, post, category) values ($1, $2, $3, $4)",
      [req.body.title, req.body.image, req.body.post, req.body.category]
    );
    console.log(result.rows);
    res.json({ message: "new blog added", desc: result.rowCount });
  } catch (err) {
    console.error("Error executing query:", err);
  }
});

app.post("/blogimage", upload.single("file"), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.json(req.file);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
