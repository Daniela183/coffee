import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Home from "../components/template/Home"
import Cardapio from "../components/template/Cardapio"
import Bebidas from "../components/template/Bebidas"
import Doces from "../components/template/Doces"
import Salgados from "../components/template/Salgados"
import Chocolates from "../components/template/Chocolates"


const router = createBrowserRouter([
    
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/bebidas",
        element: <Bebidas />,
    },
    {
        path: "/cardapio",
        element: <Cardapio />,
    },
    {
        path: "/doces",
        element: <Doces />,
    },
    {
        path: "/salgados",
        element: <Salgados />,
    }

]);
function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;