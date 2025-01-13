import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Root = () => {
    return (
        <div className="">
            <div className="h-16 shadow-lg">
                <Sidebar />
                <hr />
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
