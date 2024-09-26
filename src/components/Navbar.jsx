import { AuditOutlined, SearchOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  console.log("User = ", user);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const onCreateBlogClick = () => {
    // if (user && user.isAuthorized) {
    navigate("/create-blog");
    // } else {
    //   navigate("/sign-in");
    // }
  };

  const onSignInClick = () => {
    navigate("/sign-in");
  };

  const onSignUpClick = () => {
    navigate("/sign-up");
  };

  const onBlogsClick = () => {
    navigate("/");
  };

  const onMyBlogsClick = () => {
    navigate("/my-blogs");
  };

  const onSignOutClick = () => {
    //do logout logic api call
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-gray-200   ">
      <div className="  flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.png" className="h-10" alt="Blog Logo" />
        </a>
        {/* <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <SearchOutlined />
        </button>
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="user photo"
          />
        </button>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
            isSearchOpen ? "md:block" : "hidden"
          }`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
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
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div> */}

        <div className="flex items-center md:order-2 space-x-1 md:space-x-5  rtl:space-x-reverse">
          <div
            className="flex justify-center items-center font-bold cursor-pointer "
            onClick={onCreateBlogClick}
          >
            <AuditOutlined className="text-3xl" />
            <span className="">Create Blog</span>
          </div>
          {!user || !user.isAuthorized ? (
            <>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="sm:w-10 sm:h-10 w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                />
              </button>
              {dropdownOpen && (
                <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow  absolute top-10 right-0  w-48">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 ">
                      Bonnie Green
                    </span>
                    <span className="block text-sm text-gray-500 truncate ">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2">
                    <li>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  cursor-pointer"
                        onClick={onBlogsClick}
                      >
                        Blogs
                      </div>
                    </li>
                    <li>
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  cursor-pointer"
                        onClick={onMyBlogsClick}
                      >
                        My Blogs
                      </div>
                    </li>

                    <li>
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  cursor-pointer">
                        Sign out
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-between items-center">
              <button
                className=" py-2 px-4 mr-2 border rounded-full bg-black hover:bg-gray-700 text-white text-center"
                onClick={onSignInClick}
              >
                Sign In
              </button>
              <button
                className=" py-2 px-4 mr-2 border rounded-full bg-[#4da58d] hover:bg-[#3f917b] text-white text-center"
                onClick={onSignUpClick}
              >
                Sign Up
              </button>
            </div>
          )}
          {/* <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <SearchOutlined />
          </button>

          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              isSearchOpen ? "md:block" : "hidden"
            }`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
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
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
