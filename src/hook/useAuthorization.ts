import { useEffect, useRef, useState } from "react";

import axios from "axios";

import { LIVE_API } from "../constants/ApiUrl";

type Step = "login" | "otp";

const useAuthorization = () => {
    const tokenIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [step, setStep] = useState<Step>("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (!email || !password) return setError("შეავსე ყველა ველი");
        setLoading(true);
        setError("");
        try {
            await axios.post(
                `${LIVE_API}/api/Auth/login`,
                { email, password },
                { headers: { "Content-Type": "application/json" }, withCredentials: true },
            );
            setStep("otp");
        } catch {
            setError("არასწორი email ან პაროლი");
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async () => {
        if (!otp) return setError("შეიყვანე კოდი");
        setLoading(true);
        setError("");
        try {
            const { data } = await axios.post(
                `${LIVE_API}/api/Auth/verify`,
                { code: otp },
                { headers: { "Content-Type": "application/json" }, withCredentials: true },
            );
            localStorage.setItem("accessToken", data.accessToken);
            window.location.href = "/";
        } catch {
            setError("არასწორი ან ვადაგასული კოდი");
        } finally {
            setLoading(false);
        }
    };

    const refreshToken = async () => {
        try {
            await axios.post(`${LIVE_API}/api/Auth/refresh`, {}, { withCredentials: true });
        } catch {
            window.location.href = "/login";
        }
    };

    useEffect(() => {
        tokenIntervalRef.current = setInterval(refreshToken, 14 * 60 * 1000);

        return () => {
            if (tokenIntervalRef.current) clearInterval(tokenIntervalRef.current);
        };
    }, []);

    return {
        handleLogin,
        handleVerify,
        step,
        setStep,
        email,
        setEmail,
        password,
        setPassword,
        otp,
        setOtp,
        loading,
        error,
        setError,
    };
};
export default useAuthorization;
