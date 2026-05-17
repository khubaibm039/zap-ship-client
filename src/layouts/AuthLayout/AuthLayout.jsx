import { Outlet } from "react-router";
import Logo from "../../Components/Logo/Logo";
import AuthImage from "../../assets/authImage.png";
const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto h-screen">
            <Logo></Logo>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-20 ">
                <div className="w-full flex-1">
                    <Outlet />  
                </div>
                <div className="w-full flex-1">
                    <img src={AuthImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;