import "./App.scss";

// ========== react-router ========== //
import { Outlet, useLocation } from "react-router";

// ========== component ========== //
import Header from "./layout/Header";
import { useEffect, useState } from "react";
import Footer from "./layout/Footer";
import ContextMenu from "./components/ContextMenu";
import CustomConsole from "./components/CustomConsole";

function App() {
    const location = useLocation();
    const [showConsole, setShowConsole] = useState(false);
    useEffect(() => {
        console.log("Hello From", location.pathname.slice(1, -1));

        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <ContextMenu showConsole={showConsole} setShowConsole={setShowConsole} />
            {location.pathname === "/project-details" ? null : <Header />}

            <main>
                <Outlet />
                {/* <AdminProjects /> */}
                <CustomConsole showConsole={showConsole} setShowConsole={setShowConsole} />
            </main>

            <Footer />
        </>
    );
}

export default App;
