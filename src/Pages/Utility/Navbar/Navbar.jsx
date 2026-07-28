import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo/Logo";
import useAuth from "../../../Hooks/useAuth";
import { BsArrowUpRightCircleFill } from "react-icons/bs";


const links = (
    <>
        <li>
            <NavLink to="">Services</NavLink>
        </li>
        <li>
            <NavLink to="/coverage">Coverage</NavLink>
        </li>
        <li>
            <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
            <NavLink to="">Pricing</NavLink>
        </li>
        <li>
            <NavLink to="/rider">Be a Rider</NavLink>
        </li>
    </>
);

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="pt-8">
            <div className="navbar bg-base-100 shadow-sm mb-8 rounded-2xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="btn btn-ghost text-xl">
                        <Logo></Logo>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end gap-4">
                    <div>
                        {user ? (
                            <a onClick={handleLogOut} className="btn rounded-xl">
                                Sign Out
                            </a>
                        ) : (
                            <Link className="btn rounded-xl" to={"/login"}>
                                Sign In
                            </Link>
                        )}
                    </div>
                    <Link to="/BeARider" className="mr-4 flex justify-center items-center cursor-pointer" >
                        <div className="py-4 px-4 btn bg-primary font-bold text-[20px] rounded-xl">Be a rider</div>
                       <div className="w-full h-full ">
                         <BsArrowUpRightCircleFill  className="w-full h-10 bg-primary rounded-full "/>
                       </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
