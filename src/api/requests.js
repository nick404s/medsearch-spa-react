import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { getCleanData } from "../utils/utils";

const openFDAFetch = axios.create({
  baseURL: BASE_URL,
});

const getMedicationsByIngredient = async (searchTerm) => {
  try {
    // +AND+effective_time:[1980-06-01+TO+2026-12-12])&limit=20&sort=effective_time:desc`;  +OR+active_ingredient:"${searchTerm[0].toUpper()}"
    const url = `/label.json?search=
    (active_ingredient:"${searchTerm}"+AND+_exists_:"openfda"
    +AND+effective_time:[2020-06-01+TO+2026-12-12])&limit=100&sort=effective_time:desc`;
    const response = await openFDAFetch.get(url);
    const data = response.data.results || [];
    return data;
  } catch (error) {
    // console.log("=== by condition response error: ", error);
    return [];
  }
};

const getMedicationByCondition = async (searchTerm) => {
  // For phrase matches, use double quotation marks " " around the words. For example, "multiple+myeloma". &_exists_:openfda
  try {
    const url = `https://api.fda.gov/drug/label.json?search=
    (purpose:"${searchTerm}"+AND+_exists_:"openfda"
    +AND+effective_time:[2020-06-01+TO+2026-12-12])&limit=100&sort=effective_time:desc`;
    const response = await axios.get(url);
    console.log("=== by condition response status: ", response.status);
    const data = response.data.results || [];
    const cleanData = getCleanData(data, searchTerm);
    console.log(cleanData);
    return cleanData;
  } catch (error) {
    // console.log("=== by condition response error: ", error.message);
    return [];
  }
};

export { getMedicationsByIngredient, getMedicationByCondition };
