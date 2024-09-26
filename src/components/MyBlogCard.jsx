import { useNavigate } from "react-router-dom";

const MyBlogCard = ({ image, date, CardTitle, CardDescription }) => {
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
            <h3>
              <div
                onClick={onBlogClick}
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-=#4da58d]  sm:text-2xl lg:text-xl xl:text-2xl cursor-pointer"
              >
                {CardTitle}
              </div>
            </h3>

            <div className="flex justify-around items-center mt-5 border-t-2 pt-3">
              <div className="flex justify-center items-center border-r-2 hover:text-[#98CFC0]  w-full">
                <button>Edit</button>
              </div>
              <div className="flex justify-center items-center text-red-500 hover:text-red-700  w-full">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBlogCard;
