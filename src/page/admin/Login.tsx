import useAuthorization from "../../hook/useAuthorization";

// interface Props {
//     useAuthorizationHook: () => void;
// }

const Login = () => {
    // const { useAuthorizationHook } = props;
    const {
        error,
        handleLogin,
        handleVerify,
        loading,
        email,
        setEmail,
        otp,
        setOtp,
        password,
        setPassword,
        step,
        setStep,
        setError,
    } = useAuthorization();

    return (
        <div className="admin-login">
            <div className="admin-login__bg">
                {[...Array(20)].map((_, i) => (
                    <span
                        key={i}
                        className="admin-login__dot"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className="admin-login__card">
                <div className="admin-login__header">
                    <div className="admin-login__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2L2 7v10l10 5 10-5V7L12 2z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            <path d="M12 22V12M2 7l10 5 10-5" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <h1 className="admin-login__title">admin panel</h1>
                    <p className="admin-login__subtitle">{step === "login" ? "შედი სისტემაში" : "შეიყვანე კოდი"}</p>
                </div>

                <div className="admin-login__steps">
                    <div className={`admin-login__step ${step === "login" ? "active" : "done"}`}>01</div>
                    <div className="admin-login__step-line" />
                    <div className={`admin-login__step ${step === "otp" ? "active" : ""}`}>02</div>
                </div>

                {error && <div className="admin-login__error">{error}</div>}

                {step === "login" ? (
                    <div className="admin-login__form">
                        <div className="admin-login__field">
                            <label>email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                                placeholder="your@email.com"
                                autoFocus
                            />
                        </div>
                        <div className="admin-login__field">
                            <label>password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                                placeholder="••••••••"
                            />
                        </div>
                        <button className="admin-login__btn" onClick={handleLogin} disabled={loading}>
                            {loading ? <span className="admin-login__spinner" /> : "შესვლა →"}
                        </button>
                    </div>
                ) : (
                    <div className="admin-login__form">
                        <p className="admin-login__otp-hint">
                            კოდი გაიგზავნა <span>mumladzea4@gmail.com</span>-ზე
                        </p>
                        <div className="admin-login__field">
                            <label>otp კოდი</label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                                placeholder="000000"
                                maxLength={6}
                                autoFocus
                            />
                        </div>
                        <button className="admin-login__btn" onClick={handleVerify} disabled={loading}>
                            {loading ? <span className="admin-login__spinner" /> : "დადასტურება →"}
                        </button>
                        <button
                            className="admin-login__back"
                            onClick={() => {
                                setStep("login");
                                setError("");
                                setOtp("");
                            }}
                        >
                            ← უკან
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
