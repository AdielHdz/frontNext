"use client"

import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function Home() {
  return (
    <div className=" bg-black h-screen flex flex-col items-center justify-center">

      <h1 className="text-white mb-10 text-2xl">Good Bussines</h1>

      <div className="w-full flex items-center justify-center">
      <button className={`relative border-2 border-green-800 w-3/5 rounded-full pt-2 hover:bg-green-800 shadow-shadowButtons hover:text-white transition duration-300 pb-2  text-green-800 `}
      onClick={() => alert("Añadido al carrito correctamente")} 
      > 
      
        <h5 className="relative inline ">
          Agregar al carrito
          <AiOutlineShoppingCart className="inline-block text-xl absolute top-0 -right-7 " />
        </h5>
      </button>
      </div>
    
    </div>
  );
}
