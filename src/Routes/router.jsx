import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import About from "../Pages/About/About";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        HydrateFallback: () => null,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/coverage",
                element: <Coverage></Coverage>,
                loader: () =>
                    fetch("/serviceCenters.json").then((res) => res.json()),
            },
            {
                path: "/about",
                element: <About></About>,
                loader: () =>
                    fetch("/about.json").then((res) => res.json()),
            },
        ],
    },
]);
