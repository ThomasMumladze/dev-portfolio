import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import App from "./App";
import Home from "./page/Home";

const Project = lazy(() => import("./page/Project"));
const About = lazy(() => import("./page/About"));
const ProjectDetails = lazy(() => import("./page/ProjectDetail"));
const Contact = lazy(() => import("./page/Contact"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));

const route = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: "/project",
                Component: Project,
            },
            {
                path: "/project-details",
                Component: ProjectDetails,
            },
            {
                path: "/about-me",
                Component: About,
            },
            {
                path: "/*",
                Component: PageNotFound,
            },
        ],
    },
]);

export default route;
