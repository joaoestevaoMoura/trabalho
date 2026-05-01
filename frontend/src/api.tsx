import axios from "axios";
import { CompanySearch, CompanyProfile } from "./company";

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

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message from API:", error.message);
  }
};