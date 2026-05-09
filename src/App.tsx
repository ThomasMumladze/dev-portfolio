import "./App.scss";

// ========== react-router ========== //
import { Outlet } from "react-router";

// ========== component ========== //
import Header from "./layout/Header";

function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
