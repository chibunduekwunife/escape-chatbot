import { useNavigate } from "react-router";

export default function Button({ text, path, className}) {

  const navigate = useNavigate();


  return (
    <button
      onClick={() => navigate(path)}
      className={className || `w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 px-8 py-4 text-xl font-bold 
                  text-black bg-gradient-to-br from-gray-200 to-gray-400 
                  rounded-2xl border-2 border-gray-500
                  shadow-[0_5px_15px_rgba(0,0,0,0.5)]
                  hover:from-gray-300 hover:to-gray-500 hover:border-gray-300
                  transition-all duration-300 ease-in-out
                  hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75
                  backdrop-blur-lg`}
    >
      {text}
    </button>
  );
}
