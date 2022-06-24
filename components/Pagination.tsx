import { FC } from "react";

import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { PaginationInfo } from "../types";

type Props = {
  info: PaginationInfo | undefined;
  page: number;
  setPage: (page: number) => void;
};

const Pagination: FC<Props> = ({ info, page, setPage }) => {
  const pages = info?.last_page ?? 0;
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <button
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg m-1 transition-all disabled:opacity-50"
          onClick={() => setPage(info?.prev_page ?? 1)}
          disabled={!info?.prev_page}
        >
          <IoChevronBack className="text-2xl" />
        </button>
        {pagesArray.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg m-1 ${
              page === pageNumber ? "bg-secondary" : ""
            }`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg m-1 transition-all disabled:opacity-50"
          onClick={() => setPage(info?.next_page ?? pages)}
          disabled={!info?.next_page}
        >
          <IoChevronForward className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
