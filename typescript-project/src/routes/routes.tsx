import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, Interests, Media, NotFound, WorkPage } from "../pages";

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
            {
                path: '/interests',
                element: <Interests/>,
            },            
            {
                path: '/media',
                element: <Media/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
            
        ]
    }
])