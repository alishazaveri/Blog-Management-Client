import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../services/blog.service";
import CustomLoading from "../components/CustomLoading";
import CustomEmptyState from "../components/EmptyState";
import CustomPagination from "../components/CustomPagination";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [totalCount, setTotalCount] = useState(0);

  const handlePagination = ({ pageNumber }) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function getBlogs() {
      setLoading(true);
      const response = await getAllBlogs({ currentPage });

      if (response && response.data) {
        setBlogs(response.data);
        setTotalCount(response.totalCount);
      }

      setLoading(false);
    }

    getBlogs();
  }, [currentPage]);

  return (
    <div className=" max-w-full px-10">
      <section className="bg-white pb-10 pt-10  lg:pb-20 max-w-full w-full flex justify-center items-center">
        {loading ? (
          <CustomLoading />
        ) : (
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px]">
                    Our Recent News
                  </h2>
                  <p className="text-base text-body-color ">
                    Inspiration in every word, knowledge in every post. Join the
                    journey of endless discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              {blogs && blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    className="w-full sm:px-4 md:w-1/2 lg:w-1/3 "
                    key={blog._id}
                  >
                    <BlogCard
                      date={blog.createdAt}
                      CardTitle={blog.title}
                      image={blog.blogImageUrl}
                      createdBy={blog.userId.username}
                      createdImage={blog.userId.imageUrl}
                      blogId={blog._id}
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
      <CustomPagination
        currentPage={currentPage}
        length={totalCount}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default BlogsPage;
