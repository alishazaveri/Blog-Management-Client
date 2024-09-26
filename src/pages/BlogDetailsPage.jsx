import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../services/blog.service";
import CustomLoading from "../components/CustomLoading";
import { format } from "date-fns";
import CustomEmptyState from "../components/EmptyState";
import parse from "html-react-parser";

const BlogDetailsPage = () => {
  const { blogId } = useParams();

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlog() {
      setLoading(true);
      const response = await getBlogById({ blogId });

      if (response && response.data) {
        setBlog(response.data);
      }

      setLoading(false);
    }

    getBlog();
  }, [blogId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {blog && blog._id ? (
            <div className="max-w-3xl mx-auto">
              <div className="py-8">
                <h1 className="text-3xl font-bold mb-2">Blog post title</h1>
                <p className="text-gray-500 text-sm">
                  Published on{" "}
                  {format(new Date(blog.createdAt), "MMM dd, yyyy")} by{" "}
                  {blog.userId.username}
                </p>
              </div>

              <img
                src={blog.blogImageUrl}
                alt={blog.title}
                className="w-full h-auto mb-8"
              />

              <div className=" mx-auto react-quill-custom">
                {" "}
                {parse(blog.description)}
              </div>
            </div>
          ) : (
            <CustomEmptyState />
          )}
        </>
      )}
    </div>
  );
};

export default BlogDetailsPage;
