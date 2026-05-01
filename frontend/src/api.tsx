import axios from "axios";
import { CompanySearch } from "./company";

export const searchCompanies = async (query: string) => {
  try {
    if (!query.trim()) return [];

    const response = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    return response.data;
  } catch (error: any) {
    console.log("Erro:", error?.message || error);
    return [];
  }
};