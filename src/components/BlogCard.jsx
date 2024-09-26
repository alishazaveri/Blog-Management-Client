import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, date, CardTitle }) => {
  const navigate = useNavigate();

  const onBlogClick = ({ blogId }) => {
    navigate("/blog");
  };

  return (
    <>
      <div className="w-full sm:px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex justify-center items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Jese Leos</span>
              </div>
              {date && (
                <span className=" block rounded bg-[#98CFC0] px-4 py-1 text-center text-xs font-semibold leading-loose text-black">
                  {date}
                </span>
              )}
            </div>

            <h3>
              <div
                onClick={onBlogClick}
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-=#4da58d]  sm:text-2xl lg:text-xl xl:text-2xl cursor-pointer"
              >
                {CardTitle}
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
