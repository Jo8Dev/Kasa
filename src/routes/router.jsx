import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import NotFound from "../pages/NotFound/NotFound"
import Lodging from "../pages/Lodging/Lodging"

function createRoutes() {
    return createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { path: "", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "lodging/:id", element: <Lodging /> },
                { path: "*", element: <NotFound /> },// Page 404
            ],
        },

    ])
}

const router = createRoutes()
export default router
