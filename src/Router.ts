import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import App from "./App";
import Home from "./page/Home";

const project = lazy(() => import("./page/Project"));
const about = lazy(() => import("./page/About"));
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
                path: "/project",
                Component: project,
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
