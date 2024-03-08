import Home from "../@page/home";
import Shop from "../@page/shop";

const router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/shop',
        element: <Shop />
    }
]

export default router;