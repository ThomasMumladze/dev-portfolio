import "./App.scss";

// ========== React Hook ========== //
import { useEffect } from "react";

// ========== react-router ========== //
import { Outlet, useLocation } from "react-router";

// ========== component ========== //
import ContextMenu from "./components/ContextMenu";

// ========== Authorization ========== //
import useAuthorization from "./hook/useAuthorization";
import type { Authorization } from "./types/authorization";

function App() {
    const { ...authorization } = useAuthorization() as Authorization;
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            {/* <ContextMenu /> */}
            <main>
                <Outlet context={{ authorization }} />
            </main>
        </>
    );
}

export default App;
