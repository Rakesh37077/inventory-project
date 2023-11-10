import React from "react";

const Login = () => {
  return (
    <div className="bg-slate-900 min-h-screen pb-16">
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 rounded-md bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-2xl font-semibold mb-0 leading-7">
            Welcome to React Inventory,
            <span className="text-xl font-normal mt-1 block">
              sign in to continue
            </span>
          </h1>
          <form className="mt-6">
            <div className="mb-4">
              <label
                for="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="abc@example.com"
                autocomplete="email"
                className="block w-full p-3 rounded-md mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="current-password"
                className="block w-full p-3 rounded-md mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md mt-6 font-medium tracking-widest text-white uppercase bg-blue-500 shadow-lg focus:outline-none hover:bg-blue-600 hover:shadow-none"
            >
              Sign in
            </button>
            {/* <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
              Forgot password?
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
