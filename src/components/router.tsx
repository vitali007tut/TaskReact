import { createBrowserRouter } from "react-router-dom";
import FormRegister from "./FormRegister";
import Header from "./Header";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <NotFoundPage />,
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
