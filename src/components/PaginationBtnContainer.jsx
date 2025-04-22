import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAllMedicationsContext } from "../pages/AllMedications";
import {
  useLocation,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Style from "../styles/PaginationBtnContainer.style";

const PaginationBtnContainer = ({
  numberOfPages,
  currentPage,
  handlePageChange,
}) => {
  // const { data, searchTerm, searchBy } = useAllMedicationsContext();
  console.log(numberOfPages, currentPage);
  const { search, pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("== pathname, search ===");
  // console.log(pathname, search);
  const navigate = useNavigate();

  const pages = Array.from({ length: numberOfPages }, (_, index) => {
    return index + 1; // so the pages start from 1
  });
  // console.log(pages);

  const handlePageNumber = (e, pageNumber) => {
    // console.log("== page url ===");
    handlePageChange(e, pageNumber);
    // const searchParams = new URLSearchParams(search);
    // searchParams.set("page", pageNumber);
    // navigate(`${pathname}?${searchParams.toString()}`);
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
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        <p>{currentPage}</p>

        {/* {pages.map((pageNumber, index) => {
          
          return (
            <button
              key={pageNumber}
              className={`page-btn ${pageNumber === currentPage && "active"}`}
              onClick={(e) => {
                handlePageNumber(e, pageNumber);
              }}
            >


              <span className="page-number">
                {pageNumber === currentPage && pageNumber}
              </span>

            </button>
          );
        })} */}
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
        <HiChevronDoubleRight />
      </button>
    </Style>
  );
};

export default PaginationBtnContainer;
