/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import {getBlogbyid} from '../api/Api';
import { useParams, useResolvedPath } from 'react-router-dom';
import { all } from 'axios';
import parse from 'html-react-parser';
import dateFormat, { masks } from "dateformat";
// const now = new Date();

const Blog = () => {
  // const apiURL = 'http://localhost:3000/';
  const apiURL = `${window.location.origin}`;

  let {id} = useParams();
  // alert(id);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const allBlogs = await getBlogbyid(id);
        // console.log("API response :", allBlogs.data);
        if (allBlogs) {
          // console.log(allBlogs);
          setBlog(allBlogs.data[0]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className='flex justify-center items-center'>
      {blog &&  <div className='flex flex-col w-[60%] overflow-hidden'>
        <h1 className='mt-1 text-3xl font-extrabold'>{blog.title}</h1>
        <div className='flex mt-4 mb-4'>
            <small>{dateFormat(blog.createdon, "mmmm dS, yyyy")}</small>
        </div>
        <img className='rounded-lg' src={apiURL+blog.image} alt="" />
        <div>
          {parse(blog.post)}
        </div>
      </div> }
    </div>
  )
}

export default Blog
