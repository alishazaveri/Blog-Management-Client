import React, { useContext } from "react";
import BlogCard from "../components/BlogCard";
import { UserContext } from "../App";

const BlogsPage = () => {
  const user = useContext(UserContext);

  console.log("User = ", user);
  return (
    <div className=" max-w-full px-10">
      <section className="bg-white pb-10 pt-10  lg:pb-20 max-w-full w-full flex justify-center items-center">
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
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Meet AutoManage, the best AI management tools"
              CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
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

export default BlogsPage;
