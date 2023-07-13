"use client";

import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/Features/PlaceHolder/usersSlice";
import Link from "next/link";
import Loading from "../components/Loading/Loading";
export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(getAllUsers());
    console.log(users);
  }, [users.length]);

  return (
    <div className=" bg-black h-screen p-5 ">
      <h1 className="text-white mb-10 text-2xl text-center">Good Bussines</h1>

      {
        users.length 
        ? (<>
          {users.map((user) => {
            return (
              <div className="flex items-center border border-green-800 p-3 mt-1 mb-1" key={user.id}>
                <img src={user.avatar} alt={user.name} className="md:w-32 md:h-32 rounded-full w-16 h-16 " />
                <Link href={`/userDetail?userId=${user.id}`}  className="text-white cursor-pointer hover:text-blue-500 w-full text-center " ><h5>{user.first_name} {user.last_name}</h5></Link>
              </div>
            );
          })}
             <div className="w-full flex items-center justify-center mt-3">
        <button
          className={`relative border-2 border-green-800 w-full md:w-3/5 rounded-full pt-2 hover:bg-green-800 shadow-shadowButtons hover:text-white transition duration-300 pb-2  text-green-800 `}
          onClick={() => alert("Añadido al carrito correctamente")}
        >
          <h5 className="relative inline ">
            Agregar al carrito
            <AiOutlineShoppingCart className="inline-block text-xl absolute top-0 -right-7 " />
          </h5>
        </button>
      </div>
        </>)
        : (<Loading />)
      }
     

   
    </div>
  );
}
