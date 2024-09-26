import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { UserContext } from "../App";
import MyBlogCard from "../components/MyBlogCard";

const MyBlogsPage = () => {
  const user = useContext(UserContext);

  console.log("User = ", user);
  return (
    <div className=" max-w-full px-10">
      <section className="bg-white pb-10 pt-10  lg:pb-20 max-w-full w-full flex justify-center items-center">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <MyBlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <MyBlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <MyBlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBlogsPage;
