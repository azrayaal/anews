import React from "react";
import { Link } from "react-router-dom";
import stark from "../../../assets/stark.png";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-black">aNews</a>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            <li>
              <details>
                <summary>Categories</summary>
                <ul
                  className="p-2 rounded-none z-10"
                  style={{
                    borderBottomLeftRadius: "0.375rem",
                    borderBottomRightRadius: "0.375rem",
                  }}
                >
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="about-us">About us</Link>
            </li>
            <li>
              <Link to="contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        {/* search */}
        <form className="max-w-md">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md"
              placeholder="Search anything..."
              required
            />
            {/* <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}
          </div>
        </form>
        <div className="profile-navbar hidden lg:flex ">
          <img
            src={stark}
            alt="profile"
            className="w-10 h-10 rounded-md my-auto shadow-md ml-4 mr-1"
          />
          <ul className="menu menu-horizontal text-black z-10">
            <li>
              <details>
                <summary className="font-bold ">azrayaal</summary>
                <ul
                  className="p-2 rounded-none"
                  style={{
                    borderBottomLeftRadius: "0.375rem",
                    borderBottomRightRadius: "0.375rem",
                  }}
                >
                  <li>
                    <a>Setting</a>
                  </li>
                  <li>
                    <a>Log out</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
