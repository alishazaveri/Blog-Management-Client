import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { UserContext } from "../App";
import MyBlogCard from "../components/MyBlogCard";
import { getAllBlogsByUserId } from "../services/blog.service";
import CustomLoading from "../components/CustomLoading";
import CustomEmptyState from "../components/EmptyState";
import { useNavigate } from "react-router-dom";

const MyBlogsPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    setLoading(true);
    const response = await getAllBlogsByUserId();

    if (response && response.data) {
      setBlogs(response.data);
    }

    setLoading(false);
  }

  return (
    <div className=" max-w-full px-10">
      <section className="bg-white pb-10 pt-10  lg:pb-20 max-w-full w-full flex justify-center items-center">
        {loading ? (
          <CustomLoading />
        ) : (
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              {blogs && blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    className="w-full sm:px-4 md:w-1/2 lg:w-1/3"
                    key={blog._id}
                  >
                    <MyBlogCard
                      date={blog.createdAt}
                      CardTitle={blog.title}
                      image={blog.blogImageUrl}
                      blogId={blog._id}
                      getBlogs={getBlogs}
                    />
                  </div>
                ))
              ) : (
                <CustomEmptyState />
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyBlogsPage;
