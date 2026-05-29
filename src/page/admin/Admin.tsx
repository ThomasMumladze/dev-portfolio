import { Outlet } from "react-router";
import Header from "../../layout/Header";

const Admin = () => {
    return (
        <article className="admin-page">
            <Header />
            <Outlet />
        </article>
    );
};

export default Admin;
