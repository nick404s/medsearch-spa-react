import { redirect, useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import {
  getMedicationsByIngredient,
  getMedicationByCondition,
} from "../api/requests";
import { SearchParameters } from "../constants/constants";
import { NavigationButton, MedicationsContainer } from "../components";

const medicationsQuery = (searchTerm, searchBy) => ({
  queryKey: ["medications", { searchTerm, searchBy }],
  queryFn: async () => {
    let data = [];
    if (searchBy === SearchParameters.INGREDIENT) {
      data = await getMedicationsByIngredient(searchTerm);
    }
    if (searchBy === SearchParameters.CONDITION) {
      data = await getMedicationByCondition(searchTerm);
    }
    return data;
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    let searchTerm = url.searchParams.get(SearchParameters.SEARCH_TERM);

    if (!searchTerm || !searchTerm.trim()) {
      toast.error("Please enter a search term");
      return redirect("/");
    }
    // sanitize the search term
    searchTerm = searchTerm.trim();
    searchTerm = DOMPurify.sanitize(searchTerm);
    const searchBy = url.searchParams.get(SearchParameters.SEARCH_BY);

    let data = [];
    try {
      data = await queryClient.ensureQueryData(
        medicationsQuery(searchTerm, searchBy)
      );
      if (data.length === 0) {
        toast.error("No medications found for the term");
        return redirect("/");
      }
      return { searchTerm, searchBy };
    } catch (error) {
      return redirect("/");
    }
  };

const AllMedicationsContext = createContext();

const AllMedications = () => {
  const { searchTerm, searchBy } = useLoaderData();
  const { data } = useQuery(medicationsQuery(searchTerm, searchBy));

  return (
    <AllMedicationsContext.Provider value={{ data, searchTerm, searchBy }}>
      <div className="nav-container">
        <NavigationButton isBack={true} />
      </div>
      <MedicationsContainer />
    </AllMedicationsContext.Provider>
  );
};

export const useAllMedicationsContext = () => {
  return useContext(AllMedicationsContext);
};

export default AllMedications;
