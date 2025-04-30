import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Style from "../styles/PaginationBtnContainer.style";

const PaginationBtnContainer = ({
  numberOfPages,
  currentPage,
  handlePageChange,
}) => {
  // const pages = Array.from({ length: numberOfPages }, (_, index) => {
  //   return index + 1; // so the pages start from 1
  // });

  const handlePageNumber = (e, pageNumber) => {
    handlePageChange(e, pageNumber);
  };

  return (
    <Style>
      <button
        className="prev-btn"
        onClick={(e) => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numberOfPages;
          handlePageNumber(e, prevPage);
        }}
      >
        <HiChevronLeft />
        prev
      </button>
      <div className="btn-container">
        <p>{currentPage}</p>
      </div>
      <button
        className="next-btn"
        onClick={(e) => {
          let nextPage = currentPage + 1;
          if (nextPage > numberOfPages) nextPage = 1;
          handlePageNumber(e, nextPage);
        }}
      >
        next
        <HiChevronRight />
      </button>
    </Style>
  );
};

export default PaginationBtnContainer;
