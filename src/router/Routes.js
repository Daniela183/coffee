import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Home from "../components/home/Home"
import Cardapio from "../components/template/Cardapio"
import Bebidas from "../components/template/Bebidas"
import Doces from "../components/template/Doces"
import Salgados from "../components/template/Salgados"
import Nav from "../components/template/Nav";
import Cadastro from "../components/template/Cadastro";
import Login from "../components/template/Login";


const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Nav><Home /></Nav>,
    },
    {
        path: "/bebidas",
        element: <Nav><Bebidas /></Nav>,
    },
    {
        path: "/cardapio",
        element: <Nav><Cardapio /></Nav>,
    },
    {
        path: "/doces",
        element:<Nav><Doces /></Nav> ,
    },
    {
        path: "/salgado",
        element:<Nav><Salgados /></Nav> ,
    },
    {
        path: "/cadastro",
        element:<Nav><Cadastro /></Nav> ,
    },
    {
        path: "/login",
        element:<Nav><Login /></Nav> ,
    }
    
]);
function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;