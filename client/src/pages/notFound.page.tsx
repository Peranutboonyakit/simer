import { motion } from "framer-motion";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#242424] relative">
      <img
        src="/images/404/vector1.png"
        alt="vector"
        className="absolute top-0 right-0 h-[60%] w-[60%] md:h-[65%] md:w-[55%]"
      />
      <img
        src="/images/404/vector2.png"
        alt="vector"
        className="absolute bottom-0 left-0 h-[60%] w-[60%] md:h-[65%] md:w-[55%]"
      />
      <div className="container z-[2] flex flex-col items-center justify-center w-full h-full mx-auto">
        <div className="text-[8rem] md:text-[10rem] font-extrabold text-white tracking-widest flex items-center relative space-x-52">
          <p>4</p>
          <p>4</p>
          <motion.img
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src="/images/404/404.png"
            alt="404"
            className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] absolute top-0 left-[-30%]"
          />
        </div>
        <div className="mb-6 text-center text-white z-[2]">
          <p className="font-bold text-[2rem] tracking-wider">
            Oops, <span className="font-extralight">you've lost</span>
          </p>
          <p className="mt-2 tracking-wider">
            We can't find the page that you're looking for...
          </p>
        </div>
        <PrimaryButton
          title="GO HOME"
          width="md"
          rounded="rounded-full"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
