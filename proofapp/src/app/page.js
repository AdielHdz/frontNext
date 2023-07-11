import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./page.module.css"
export default function Home() {
  return (
    <div className="flex items-center justify-center mt-20">
      <button className={`relative border-2 border-green-800 w-1/2 rounded-full pt-2 hover:bg-green-800 shadow-shadowButtons hover:text-white transition duration-300 pb-2  text-green-800`}>
        <h5 className="relative inline ">
          Agregar al carrito
          <AiOutlineShoppingCart className="inline-block text-xl absolute top-0 -right-7 " />
        </h5>
      </button>
    </div>
  );
}
