import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import App from "./App";
import Home from "./page/Home";

const project = lazy(() => import("./page/Project"));
const about = lazy(() => import("./page/About"));
const projectDetails = lazy(() => import("./page/ProjectDetail"));
const contact = lazy(() => import("./page/Contact"));
const pageNotFound = lazy(() => import("./page/PageNotFound"));

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
                Component: contact,
            },
            {
                path: "/project",
                Component: project,
            },
            {
                path: "/project-details",
                Component: projectDetails,
            },
            {
                path: "/about-me",
                Component: about,
            },
            {
                path: "/*",
                Component: pageNotFound,
            },
        ],
    },
]);

export default route;
