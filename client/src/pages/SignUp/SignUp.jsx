import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5002/signup", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="grid min-h-screen place-items-center pb-16">
        <div className="w-11/12 p-12 rounded-md bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-2xl font-semibold mb-0 leading-7">
            Welcome to React Inventory,
            <span className="text-xl font-normal mt-1 block">
              Signup to continue
            </span>
          </h1>
          <form className="mt-6" onSubmit={HandleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="email"
                className="block w-full p-3 rounded-md mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="abc@example.com"
                autoComplete="email"
                className="block w-full p-3 rounded-md mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autoComplete="current-password"
                className="block w-full p-3 rounded-md mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md mt-6 font-medium tracking-widest text-white uppercase bg-blue-500 shadow-lg focus:outline-none hover:bg-blue-600 hover:shadow-none"
            >
              Register Now
            </button>
            <p className="text-center font-bold my-4">Already have account ?</p>
            {/* <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Forgot password?
            </p> */}
            <Link
              to="/login"
              className="w-full block text-center py-3 rounded-md font-medium tracking-widest text-blue-500 uppercase border-2 border-blue-500 shadow-lg focus:outline-none hover:bg-blue-600 hover:shadow-none hover:text-white"
            >
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
