import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Planets from "../components/Planets"
import Stars from "../components/Stars"
import APOD from "../components/APOD"


const router=createBrowserRouter([
    {
        path:"/",
        element:
        <div>
            <Navbar/>
            <Home/>
        </div>
    },
    {
        path:"/apod",
        element:
        <div>
            <Navbar/>
            <APOD/>
            <Footer/>
        </div>
    },
    {
        path:"/planet-details",
        element:
        <div>
            <Navbar/>
            <Planets/>
            <Footer/>
        </div>
    },
    {
        path:"/star-details",
        element:
        <div>
            <Navbar/>
            <Stars/>
            <Footer/>
        </div>
    }
])

export default router