import { useState } from "react";
import Style from "../styles/MedicationsContainer.style";
import { useAllMedicationsContext } from "../pages/AllMedications";
import { MedicationTable, PaginationBtnContainer, Loading } from ".";

const MedicationsContainer = ({ isLoading }) => {
  const { data, searchTerm, searchBy } = useAllMedicationsContext();
  // set pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfMedications = data.length;
  const numberOfPages = Math.ceil(numberOfMedications / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Style>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <div className="medication-container">
            <h4 className="search-result title">
              {numberOfMedications} result
              {numberOfMedications > 1 && "s"} for{" "}
              <span className="result"> {searchTerm}</span>
            </h4>
            <MedicationTable currentItems={currentItems} />
          </div>

          {numberOfPages > 1 && (
            <PaginationBtnContainer
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </Style>
  );
};

export default MedicationsContainer;
