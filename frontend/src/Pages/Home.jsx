/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blogcard from "../components/Blogcard";
import { getBlogs } from "../api/Api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // let category = searchParams.get('category');
  // console.log(searchParams.get('category'));
  const [blogs, setBlogs] = useState(null);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const allBlogs = await getBlogs();
        // console.log("API response :", allBlogs.data);
        if (allBlogs) {
          setBlogs(allBlogs.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // let category = searchParams.get('category');
        const allBlogs = await getBlogs(searchParams.get('category'));
        // console.log("API response :", allBlogs.data);
        if (allBlogs) {
          setBlogs(allBlogs.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchData();
  }, [searchParams]);

  const data = [
    {
      title: "Hello, This is my first blog, How are you guys?",
      image: "https://picsum.photos/301/200",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque rem labore error, tenetur voluptatum sed? Quam blanditiis fuga consectetur iusto facilis sequi, dolorem ipsa quidem. Aliquid animi maiores aliquam! Enim ut exercitationem debitis quo quos, voluptate, consectetur unde aliquid at ratione quod aliquam ipsa libero ex dignissimos sequi obcaecati dolor, ipsam praesentium natus ea. Error ab doloremque aspernatur ipsam? Consectetur pariatur aperiam eveniet quisquam aliquid. Ullam, ut! Placeat eaque minima fugit consectetur possimus, neque in nisi praesentium voluptas deserunt molestias officiis rem, tempore rerum fuga maxime reiciendis atque? Quas. Laudantium at expedita incidunt aspernatur ipsum consequuntur nisi possimus quae, cumque perferendis non ipsa id ",
      createdDate: "31 March 2001",
      comments: "10",
    },
    {
      title: "Hey, What's app",
      image: "https://picsum.photos/308/200",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque rem labore error, tenetur voluptatum sed? Quam blanditiis fuga consectetur iusto facilis sequi, dolorem ipsa quidem. Aliquid animi maiores aliquam! Enim ut exercitationem debitis quo quos, voluptate, consectetur unde aliquid at ratione quod aliquam ipsa libero ex dignissimos sequi obcaecati dolor, ipsam praesentium natus ea. Error ab doloremque aspernatur ipsam? Consectetur pariatur aperiam eveniet quisquam aliquid. Ullam, ut! Placeat eaque minima fugit consectetur possimus, neque in nisi praesentium voluptas deserunt molestias officiis rem, tempore rerum fuga maxime reiciendis atque? Quas. Laudantium at expedita incidunt aspernatur ipsum consequuntur nisi possimus quae, cumque perferendis non ipsa id ",
      createdDate: "31 March 2001",
      comments: "10",
    },
  ];

  return (
    <div>
      {/* <p>{JSON.stringify(blogs)}</p> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {blogs && Array.isArray(blogs) && // Ensure blogs is not null and is an array
        blogs.map((x, id) => {
          return <Blogcard key={id} blogdata={x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
