/* eslint-disable no-unused-vars */
import axios from "axios";

const port = 3000;
// const apiURL = `http://localhost:${port}`;
const apiURL = `${window.location.origin}`;

// export const getBlogs = async () => {
//   // return blogs
//   try {
//     const response = await axios.get(apiURL + "/blog");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export const getBlogs = async (cat) => {
  // return blogs
  if(!cat){
    cat = 'all';
  }
  try {
    const response = await axios.get(apiURL + "/blog/"+cat);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createBlog = async (data) => {
  // return blog created
  try {
    const result = await axios.post(apiURL + "/blog", data);
    console.log("Response:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
    // Handle error scenarios here
  }
};

export const getBlogbyid = async(id) => {
  try {
    const response = await axios.get(apiURL + '/blogbyid/'+id);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadFile = async (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const result = await axios.post(apiURL + "/blogimage", formdata, config);
      return result.data; // Return the response data
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rethrow the error so it can be handled by the caller
    }
  };
  
