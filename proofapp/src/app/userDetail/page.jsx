"use client"
import { useSearchParams } from "next/navigation"
    import { cleanDataUser, getUserById } from  "../../redux/Features/PlaceHolder/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const UserDetail = () => {


    const searchParams = useSearchParams()
    const userId = searchParams.get("userId")
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.userData)

    useEffect(() => {
        
        dispatch(getUserById(userId))

        return () => {
            dispatch(cleanDataUser())
        }
    }, [userId])
    return (

        <div className="text-white flex justify-center items-center h-screen p-5 pt-0">

            {
                user.id 
                ? (
                    
             <div className="border border-yellow-300   md:w-3/4  p-5 flex ">
             <img src={user.avatar} alt={user.name}  className="w-24 md:w-40 rounded-full"/>
             <div className="pl-5 pr-5 w-full">
                   <h5 className=" w-full text-center pb-5">{user.first_name} {user.last_name}</h5>
                   <p>Email: {user.email}</p>
             </div>
             </div>
                ) : (
                    <Loading />
                )
            }
            
            
            
          
        
        </div>
    
       
    )
};

export default UserDetail;