"use client";

const CustomLoading = () => {
  return (
    <div className="text-center h-screen overflow-hidden ">
      <div className="absolute  top-10 inset-0 mx-auto flex space-x-2 justify-center items-center bg-red h-screen  ">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-[#4da58d] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-[#4da58d] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-[#4da58d] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default CustomLoading;
