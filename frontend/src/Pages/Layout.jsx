/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const menu = [
    { id: 1, text: "Nature", path: "/" },
    { id: 2, text: "Travel", path: "/" },
    { id: 3, text: "Technology", path: "/" },
    { id: 4, text: "Politics", path: "/" },
  ];

  return (
    <div>
      {/* ----------------------------------------------------Header/Navbar---------------------------------------- */}
      <div className="border-b">
        <div className=" px-5 py-5 flex justify-between">
        <Link to='/'>
          <span className="font-extrabold text-2xl">BLOGGER</span>
        </Link>
          <div className="flex">
            <ul className="flex">
              {menu.map((items, id) => {
                return (
                  <li key={id}>
                    <Link className="p-2 items-center justify-center flex" to={`/?category=${items.text}`}>
                      <span>{items.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="bg-slate-500 text-white px-2 py-1 rounded">
              <Link to="/create">+ New Post</Link>
            </button>
          </div>
        </div>
      </div>
{/* ----------------------------------------------------Header/Hero---------------------------------------- */}

{/* ----------------------------------------------------Body---------------------------------------- */}

      <div className='flex mx-auto px-5 md:px-20'>
      <div className='mt-5 mb-5 min-h-[500px] w-full'>
      <Outlet></Outlet>
      </div>
      </div>

      {/* ----------------------------------------------------Footer---------------------------------------- */}
      <div className="flex bg-slate-800">
        <div className="flex mx-auto px-20 py-20 items-center justify-center">
          <h3 className="text-gray-400">BLOGGER</h3>
        </div>
      </div>

      {/* ----------------------------------------------------Footer-Ends above---------------------------------------- */}
    </div>
  );
}

export default Layout;
