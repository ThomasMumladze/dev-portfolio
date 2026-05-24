import axios from "axios";

const defaultApiUrl = "https://localhost:7196/api";

export const TestApi = async () => {
    try {
        const response = await axios.get(`${defaultApiUrl}/Project`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
