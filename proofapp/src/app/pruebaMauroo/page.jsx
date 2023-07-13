import Link from "next/link";
import Image from "next/image";
import imagenMauroo from "../../../public/asset/_MG_0299.JPG"
const PruebaMuro = () => {
  return (
    <div className="text-white bg-black h-screen">
      <h1 className="text-4xl font-medium p-3 text-center">Mauroo</h1>
      <div className="grid grid-cols-2 justify-center items-center">
        <h3 className="text-xl font-medium text-center">ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi
          perferendis et quis non obcaecati, vel, nulla nesciunt quod totam id
          aliquid distinctio iste. Aut aperiam libero dolor repellendus quia.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={imagenMauroo}
          alt="Descripción de la imagen"
          className="rounded-full w-40 h-40"
          width={0}
          height={0}
          
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          <Link href="/" className="text-white hover:text-yellow-200">
            Inicio
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PruebaMuro;
