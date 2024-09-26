import { Empty } from "antd";

const CustomEmptyState = () => {
  return (
    <div className="text-center h-screen w-full">
      <div className="absolute inset-0 w-1/2 h-1/2  m-auto flex space-x-2 justify-center items-center bg-red   ">
        <Empty />
      </div>
    </div>
  );
};

export default CustomEmptyState;
