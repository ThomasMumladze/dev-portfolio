type Step = "login" | "otp";

export interface Authorization {
    handleLogin: () => Promise<void>;
    handleVerify: () => Promise<void>;
    step: Step;
    setStep: React.Dispatch<React.SetStateAction<Step>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    otp: string;
    setOtp: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}
