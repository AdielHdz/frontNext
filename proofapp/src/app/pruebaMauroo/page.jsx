import Link from "next/link";

const PruebaMuro = () => {
  return (
    <div className="text-black h-screen bg-white">
      <h1 className="text-4xl font-medium p-3 text-center">Mauroo</h1>
      <div className="grid grid-cols-2 justify-center items-center">
        <h3 className="text-xl font-medium text-center">ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi
          perferendis et quis non obcaecati, vel, nulla nesciunt quod totam id
          aliquid distinctio iste. Aut aperiam libero dolor repellendus quia.
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <img
          src="../../../public/asset/istockphoto-1410982699-612x612.jpeg"
          alt="Descripción de la imagen"
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
