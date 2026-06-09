import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_DEFAULT_API_URL}/api`;

// project api
export const GetProjects = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/Project`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};

// send email api
export const SendEmail = async (name: string, email: string, message: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/Contact`, {
            name,
            email,
            message,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};

// contact api
export const GetContact = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/Contact/1`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};
