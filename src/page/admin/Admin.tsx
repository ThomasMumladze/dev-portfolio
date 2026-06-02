import { Outlet } from "react-router";
import Header from "../../layout/Header";

const Admin = () => {
    return (
        <main>
            <article className="admin-page">
                <Header />
                <Outlet />
            </article>
        </main>
    );
};

export default Admin;
