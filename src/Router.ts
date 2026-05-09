import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import App from "./App";
import Home from "./page/Home";

const project = lazy(() => import("./page/Project"));
const notFound = lazy(() => import("./page/NotfoundPage"));

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

            { path: "*", Component: notFound },
        ],
    },
]);

export default route;
