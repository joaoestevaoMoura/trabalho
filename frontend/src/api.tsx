    import axios from "axios";
    import { CompanySearch } from "./company";

    interface SearchResponse {
        data: CompanySearch[];
    }

    export const searchCompanies = async (query: string) => {
        try {
            const response = await axios.get<SearchResponse>(
                `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
            );

            return response.data;
        } catch (error: any) {
            console.log("Erro:", error?.message || error);
            return [];
        }
    };