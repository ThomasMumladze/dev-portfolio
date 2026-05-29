import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import route from "./Router.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={route} />
    </StrictMode>,
);
