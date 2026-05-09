import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./assets/page/Home";

const route = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
]);

export default route;
