import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import App from "./App";
import Home from "./page/Home";

const project = lazy(() => import("./page/Project"));
const about = lazy(() => import("./page/About"));
const notFound = lazy(() => import("./page/NotFoundPage"));

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
                Component: notFound,
            },
        ],
    },
]);

export default route;
