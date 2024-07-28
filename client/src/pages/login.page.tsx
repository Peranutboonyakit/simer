import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../stores/store";
import { postSignIn } from "../stores/slices/authSlice";
import PrimaryButton from "../components/PrimaryButton";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  console.log(auth);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-black">
      <div className="absolute w-full h-full bg-black z-[2] opacity-50" />
      <video
        className="fixed top-0 left-0 min-w-full min-h-full z-[1]"
        autoPlay
        muted
        controls={false}
        loop
      >
        <source src="/images/promoteV.mp4" type="video/mp4" />
      </video>
      <div className="z-[3] w-1/2 md:w-1/3 h-fit py-6 rounded-[10px] bg-black/70 backdrop-blur-sm overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {isLogin && (
            <motion.div
              key="signin"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <h1 className="mb-4 text-4xl font-extrabold text-white font-inter">
                Welcome Back!
              </h1>
              <div className="w-3/4 space-y-6">
                <div className="w-full space-y-1">
                  <p className="text-white">Email</p>
                  <div className="overflow-hidden rounded-[5px] h-10">
                    <input
                      value={email}
                      type="email"
                      placeholder="Email"
                      className="w-full h-full p-4 outline-none"
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full space-y-1">
                  <p className="text-white">Password</p>
                  <div className="overflow-hidden rounded-[5px] h-10">
                    <input
                      value={password}
                      type="password"
                      placeholder="Password"
                      className="w-full h-full p-4 outline-none"
                      onChange={(e: any) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <p className="cursor-pointer hover:underline text-primary-100 w-fit">
                  Forgot password?
                </p>
                <PrimaryButton
                  title="Sign in"
                  width=""
                  onClick={() =>
                    dispatch(postSignIn({ email: "test", password: "test" }))
                  }
                />
                <div className="border-b border-gray-400" />
                <div
                  className="border border-gray-400 w-full p-4 rounded-[5px] text-white font-extralight text-sm cursor-pointer
        flex items-center justify-center space-x-2 hover:bg-gray-900"
                >
                  <img src="/images/google.png" className="w-[20px] h-[20px]" />
                  <p>
                    Sign in with <span className="font-extrabold">Google</span>
                  </p>
                </div>
                <div className="text-white">
                  Don't have an account?{" "}
                  <span
                    className="ml-2 cursor-pointer hover:underline text-primary-100 w-fit"
                    onClick={() => {
                      setUsername("");
                      setEmail("");
                      setPassword("");
                      setIsLogin(false);
                    }}
                  >
                    Sign up now
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {!isLogin && (
            <motion.div
              key="signup"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <h1 className="mb-4 text-4xl font-extrabold text-white font-inter">
                Get Started Now!
              </h1>
              <div className="w-3/4 space-y-6">
                <div className="w-full space-y-1">
                  <p className="text-white">Username</p>
                  <div className="overflow-hidden rounded-[5px] h-10">
                    <input
                      value={username}
                      type="text"
                      placeholder="Username"
                      className="w-full h-full p-4 outline-none"
                      onChange={(e: any) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full space-y-1">
                  <p className="text-white">Email</p>
                  <div className="overflow-hidden rounded-[5px] h-10">
                    <input
                      value={email}
                      type="email"
                      placeholder="Email"
                      className="w-full h-full p-4 outline-none"
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full space-y-1">
                  <p className="text-white">Password</p>
                  <div className="overflow-hidden rounded-[5px] h-10">
                    <input
                      value={password}
                      type="password"
                      placeholder="Password"
                      className="w-full h-full p-4 outline-none"
                      onChange={(e: any) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button className="w-full p-2 rounded-[5px] font-extrabold text-white bg-primary-200 hover:bg-primary-100">
                  Sign Up
                </button>
                <div className="border-b border-gray-400" />
                <div className="text-white">
                  Have an account?{" "}
                  <span
                    className="ml-2 cursor-pointer hover:underline text-primary-100 w-fit"
                    onClick={() => {
                      setUsername("");
                      setEmail("");
                      setPassword("");
                      setIsLogin(true);
                    }}
                  >
                    Sign in
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginPage;
