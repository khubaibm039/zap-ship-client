import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div>
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;
