import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-lato bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="h-16 shadow-lg">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-300px)] flex items-center justify-center">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;
