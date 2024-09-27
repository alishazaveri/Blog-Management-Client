import { useState } from "react";
import { blogData } from "../data/blog";

const CustomPagination = ({ length, handlePagination, currentPage }) => {
  const [active, setActive] = useState(1);
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / blogData.postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  const onLeftArrowClick = () => {
    if (currentPage === 1) {
      handlePagination({ pageNumber: 1 });
      setActive(1);
    } else {
      handlePagination({ pageNumber: currentPage - 1 });
      setActive(currentPage - 1);
    }
  };

  const onRightArrowClick = () => {
    if (currentPage === paginationNumbers.length) {
      handlePagination({ pageNumber: paginationNumbers.length });
      setActive(paginationNumbers.length);
    } else {
      handlePagination({ pageNumber: currentPage + 1 });
      setActive(currentPage + 1);
    }
  };

  return (
    <div>
      {paginationNumbers.length > 1 && (
        <ol className="flex justify-end text-sm font-medium space-x-1  mb-5">
          <li>
            <button
              onClick={onLeftArrowClick}
              className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded hover:border-[#4da58d]"
              data-testid="leftButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>

          {paginationNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => {
                  handlePagination({ pageNumber });
                  setActive(pageNumber);
                }}
                className={`block w-8 h-8 text-center border border-gray-100 rounded leading-8 hover:border-sky-700 ${
                  pageNumber === active
                    ? "text-white bg-[#4da58d] border-[#4da58d]"
                    : ""
                }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={onRightArrowClick}
              className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded hover:border-sky-700"
              data-testid="rightButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ol>
      )}
    </div>
  );
};

export default CustomPagination;
