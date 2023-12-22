import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const useTasksCollection = () => {

    const {user, loading} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {data: tasks=[],refetch} = useQuery({
        queryKey:['tasks',user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosPublic(`tasks?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })
    return [tasks,refetch]

   
};

export default useTasksCollection;