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
                path: '/work/:project',
                element: <p>Aqui hay un proyecto</p>,
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