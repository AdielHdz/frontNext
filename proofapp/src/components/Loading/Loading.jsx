const Loading = () => {
  return (
    <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <p className="absolute">loading...</p>
      <div className=" w-32 animate-spin flex justify-center items-center  h-32 rounded-full border-t-4 border-b-4 "></div>
    </div>
  );
};

export default Loading;
