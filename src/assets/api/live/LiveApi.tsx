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

const defaultEmailApiUrl = "https://portfolioback-production-ba2c.up.railway.app/api/Contact";

export const SendEmail = async (name: string, email: string, message: string) => {
    try {
        const response = await axios.post(`${defaultEmailApiUrl}`, {
            name: name,
            email: email,
            message: message,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
