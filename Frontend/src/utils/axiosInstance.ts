import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAxiosInstance = (customBaseUrl?: string) => {
    const instance = axios.create({
        baseURL: customBaseUrl || baseURL,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    instance.interceptors.request.use((config) => {
        const token = sessionStorage.getItem("jwt");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    return instance;
};