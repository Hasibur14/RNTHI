import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Root = () => {
    return (
        <div className="">
            <Hero />
            <Navbar />
            <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
