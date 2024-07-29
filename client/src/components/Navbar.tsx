import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import classNames from "classnames";
import { motion } from "framer-motion";

import { RootState } from "../stores/store";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const auth = useSelector((state: RootState) => state.auth);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        "w-full h-[80px] sticky top-[-5px] transition duration-500 z-10",
        {
          "bg-white": scrollPosition < 25,
        },
        { "bg-transparent backdrop-blur-xl shadow-sm": scrollPosition >= 25 }
      )}
    >
      <div className="container flex items-center justify-between h-full px-4 mx-auto sm:px-0">
        <Link to="/" className="px-2 bg-black rounded-[5px] cursor-pointer">
          <div className="font-extrabold text-white uppercase text-[24px] flex items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              sim
            </motion.p>
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 1, delay: 0.5 }}
              src="/images/helmet.png"
              alt="helmet"
              className="ml-2 w-7 h-7"
            />
            <p className="mr-2">f</p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              racer
            </motion.p>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {auth.isLogIn ? (
            <div className="flex items-center space-x-4">
              <div className="p-2 transition-all rounded-full cursor-pointer ring-2 group ring-primary-300 hover:ring-primary-100">
                {auth.me?.image ? (
                  <img
                    src="/images/helmet.png"
                    alt=""
                    className="w-5 h-5 border rounded-full"
                  />
                ) : (
                  <FaUser
                    className={classNames("w-5 h-5 text-gray-700", {
                      "text-primary-300":
                        scrollPosition >= 25,
                    })}
                  />
                )}
              </div>
              <PrimaryButton
                title="Sign out"
                width="sm"
                onClick={() => navigate("/login")}
              />
            </div>
          ) : (
            <div className="">
              <PrimaryButton
                title="Sign in"
                width="sm"
                onClick={() => navigate("/login")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
