import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./style/pages/Home";

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
