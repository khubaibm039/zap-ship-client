import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ["parcels"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        },
    });

    return (
        <div>
            <h2>all parcels {parcels.length}</h2>
        </div>
    );
};

export default MyParcels;
