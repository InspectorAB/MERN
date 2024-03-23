import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Portfolio from "./Components/Portfolio";
import Registration from "./Components/Registration";
import UserDetails from "./Components/UserDetails";


export const appRoutes = [
    {path:'/',element:<HomePage/>},
    {path:'/Login',element:<Login/>},
    {path:'/Registration',element:<Registration/>},
    {path:'/UserDetails',element:<UserDetails/>},
    {path:'/Portfolio',element:<Portfolio/>}

]

