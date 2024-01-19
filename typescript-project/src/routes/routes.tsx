import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { WorkPage } from "../pages/WorkPages/WorkPage";
import { Home } from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/work',
                element: <WorkPage/>,
            },
        ]
    }
])