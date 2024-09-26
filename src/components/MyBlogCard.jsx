import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { removeBlogById } from "../services/blog.service";

const MyBlogCard = ({ date, image, CardTitle, blogId, getBlogs }) => {
  const navigate = useNavigate();

  const onBlogClick = () => {
    navigate(`/blog/${blogId}`);
  };

  const onEditClick = () => {
    navigate(`/blog-edit/${blogId}`);
  };

  const onDeleteClick = async () => {
    const response = await removeBlogById({ blogId });

    if (response.data) {
      await getBlogs();
    }
  };

  return (
    <>
      <div className="mb-10 w-full">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt="" className="w-full h-[250px]" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-5">
            {date && (
              <span className=" block rounded bg-[#98CFC0] px-4 py-1 text-center text-xs font-semibold leading-loose text-black">
                {format(new Date(date), "MMM dd, yyyy")}
              </span>
            )}
          </div>

          <h3>
            <div
              onClick={onBlogClick}
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-[#4da58d]  sm:text-2xl lg:text-xl xl:text-2xl cursor-pointer"
            >
              {CardTitle}
            </div>
          </h3>

          <div className="flex justify-around items-center mt-5 border-t-2 pt-3">
            <div
              className="flex justify-center items-center border-r-2 hover:text-[#98CFC0] cursor-pointer  w-full"
              onClick={onEditClick}
            >
              <button>Edit</button>
            </div>
            <div className="flex justify-center items-center text-red-500 hover:text-red-700  cursor-pointer w-full">
              <button>
                {" "}
                <Popconfirm
                  title="Are you sure to delete?"
                  icon={<DeleteOutlined style={{ color: "red" }} />}
                  className="w-full py-1 cursor-pointer font-regular  text-lg text-red-500 text-center hover:text-red-700"
                  onConfirm={() => onDeleteClick(blogId)}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  Delete
                </Popconfirm>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBlogCard;
