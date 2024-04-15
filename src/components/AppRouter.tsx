import { createBrowserRouter } from "react-router-dom";
import FormRegister from "./FormRegister";

export const router = createBrowserRouter([
    {
        path: "/",
    },
    {
        path: "register",
        element: <FormRegister />,
    },
    {
        path: "singin",
        element: <h1>{'singin'.toLocaleUpperCase()}</h1>,
    },

]);