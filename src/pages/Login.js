import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen justify-center align-center bg-gray-300">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Login</h1>
          <form className="flex flex-col gap-4 mt-6">
            <label htmlFor="Email">
              Email:
              <br />
              <input
                type="email"
                className="pl-6 py-3 rounded-md mt-3"
                style={{ fontSize: "18px" }}
              />
            </label>

            <label htmlFor="Password">
              Password:
              <br />
              <input
                type="password"
                className="pl-6 py-3 rounded-md mt-3"
                style={{ fontSize: "18px" }}
              />
            </label>

            <button
              type="submit"
              className="bg-green-900 text-xl py-2 px-4 rounded-md text-white"
            >
              Login
            </button>
          </form>

          <p>
            Don't have an account?
            <br />
            <NavLink to="/register" className="text-blue-900 text-lg">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;