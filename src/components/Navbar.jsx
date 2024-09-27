import { AuditOutlined } from "@ant-design/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/user.service";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const onCreateBlogClick = () => {
    if (user && user.isAuthorized) {
      navigate("/create-blog");
    } else {
      navigate("/sign-in");
    }
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const onSignOutClick = async () => {
    const response = await logoutUser();

    if (response.data) {
      navigate("/sign-in");
    }
  };

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-gray-200   ">
      <div className="  flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <span
          className="flex items-center space-x-3 rtl:space-x-revers cursor-pointer"
          onClick={onLogoClick}
        >
          <img src="logo.png" className="h-10" alt="Blog Logo" />
        </span>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-5  rtl:space-x-reverse">
          <div
            className="flex justify-center items-center font-bold cursor-pointer "
            onClick={onCreateBlogClick}
          >
            <AuditOutlined className="text-3xl" />
            <span className="hidden sm:block">Create Blog</span>
          </div>
          {user && user.isAuthorized ? (
            <>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
                onClick={openDropdown}
                aria-expanded={dropdownOpen}
              >
                <span className="sr-only">Open user menu</span>

                <img
                  className="sm:w-10 sm:h-10 w-8 h-8 rounded-full"
                  src={`${user.data.imageUrl}`}
                  alt={user.data.username}
                />
              </button>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow  absolute top-10 right-0  w-48"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 ">
                      {user.data.username}
                    </span>
                    <span className="block text-sm text-gray-500 truncate ">
                      {user.data.emailId}
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
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  cursor-pointer"
                        onClick={onSignOutClick}
                      >
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
                className="font-thin sm:font-normal sm:py-2 sm:px-4 sm:mr-2 p-1 px-2 border mr-1 rounded-full bg-black hover:bg-gray-700 text-white text-center "
                onClick={onSignInClick}
              >
                Sign In
              </button>
              <button
                className="font-thin sm:font-normal sm:py-2 sm:px-4 sm:mr-2 p-1 px-2 border rounded-full bg-[#4da58d] hover:bg-[#3f917b] text-white text-center"
                onClick={onSignUpClick}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
