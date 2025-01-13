import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const GeneralLayout = () => {
    return (
        <div className="font-lato bg-gray-100 text-black">
            <div className="h-16 shadow-md bg-white">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-300px)] p-6">
                <Outlet />
            </div>
            <div className="bg-gray-800 text-white">
                <Footer />
            </div>
        </div>
    );
};

export default GeneralLayout;
