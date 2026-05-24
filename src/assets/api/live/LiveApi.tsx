import axios from "axios";

const defaultApiUrl = "https://portfolioback-production-ba2c.up.railway.app/api";

export const GetProjects = async () => {
    try {
        const response = await axios.get(`${defaultApiUrl}/Project`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
