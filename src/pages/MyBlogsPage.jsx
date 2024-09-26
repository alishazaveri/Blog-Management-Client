import React, { useEffect, useState } from "react";
import MyBlogCard from "../components/MyBlogCard";
import { getAllBlogsByUserId } from "../services/blog.service";
import CustomLoading from "../components/CustomLoading";
import CustomEmptyState from "../components/EmptyState";
import CustomPagination from "../components/CustomPagination";

const MyBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [totalCount, setTotalCount] = useState(0);

  const handlePagination = ({ pageNumber }) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  async function getBlogs() {
    setLoading(true);
    const response = await getAllBlogsByUserId({ currentPage });

    if (response && response.data) {
      setBlogs(response.data);
      setTotalCount(response.totalCount);
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

      <CustomPagination
        currentPage={currentPage}
        length={totalCount}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default MyBlogsPage;
