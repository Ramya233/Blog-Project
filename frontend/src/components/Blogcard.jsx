/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Home from "../Pages/Home";
import { Outlet, Link } from "react-router-dom";
import { IoApps } from "react-icons/io5";

const Blogcard = (props) => {
  let blogdata = props.blogdata;
  // const apiURL = "http://localhost:3000/";
  
  const apiURL = `${window.location.origin}`;

  // const sanitizedImagePath = blogdata.image.replace(/ /g, "%20").replace(/\\/g, "/");
  const sanitizedImagePath = `/${blogdata.image.replace(/ /g, "%20").replace(/\\/g, "/")}`;

  return (
    <>
      <div className="bg-white shadow-md overflow-hidden rounded-xl">
        <Link to={`/blog/${blogdata.id}`}>
          <div className="flex flex-col w-full">
            {/* <img  src={apiURL+blogdata.image} alt="" /> */}
            <div
              className="w-full h-[250px]"
              style={{
                backgroundImage: `url(${apiURL+sanitizedImagePath})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="p-2">
              <h5 className="mt-1 text-left">{blogdata.title}</h5>
              <p className="flex justify-start opacity-70">
                <IoApps />
                <span className="text-sm text-left ml-2">
                  {blogdata.category}
                </span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blogcard;
