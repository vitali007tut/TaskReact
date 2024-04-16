import { createBrowserRouter } from "react-router-dom";
import FormRegister from "./FormRegister";
import Header from "./Header";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "register",
                element: <FormRegister />,
            },
            {
                path: "singin",
                element: <h1>{'singin'.toLocaleUpperCase()}</h1>,
            },
    ]
    },

]);
