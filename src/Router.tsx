import { createBrowserRouter, Outlet } from "react-router";

import { lazy } from "react";

import App from "./App";
import Home from "./page/Home";

const Project = lazy(() => import("./page/Project"));
const About = lazy(() => import("./page/About"));
const ProjectDetails = lazy(() => import("./page/ProjectDetail"));
const Contact = lazy(() => import("./page/Contact"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));

const LogInPage: any = lazy(() => import("./page/admin/Login"));

const Admin: any = lazy(() => import("./page/admin/Admin"));
const AdminProjects: any = lazy(() => import("./page/admin/AdminProjects"));
const DataEntry: any = lazy(() => import("./page/admin/DataEntry/DataEntry"));

import { ProtectedRoute } from "./helper/protectedRoute";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const route = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            { index: true, Component: Home },
            { path: "/contact", Component: Contact },
            { path: "/project", Component: Project },
            { path: "/about-me", Component: About },
        ],
    },
    {
        path: "/project-details",
        Component: ProjectDetails,
    },
    {
        path: "/*",
        Component: PageNotFound,
    },
    {
        path: "/log-in",
        Component: LogInPage,
    },
    {
        path: "/admin-dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                element: <Admin />,
                children: [
                    { index: true, Component: AdminProjects },
                    { path: "add-project", Component: DataEntry },
                ],
            },
        ],
    },
]);

export default route;
