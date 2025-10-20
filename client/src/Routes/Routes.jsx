import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import HowToApply from "../Componnents/Shared/NavItemsPages/HowToApply/HowToApply";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/admission/howToApply',
                element: <HowToApply />
            }
        ]
    }
])