import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function createRoutes() {
    return createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { path: "", element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
        { path: "*", element: <NotFound /> }, // Page 404
    ]);
}

const router = createRoutes();
export default router;
