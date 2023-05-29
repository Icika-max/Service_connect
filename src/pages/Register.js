import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Register = () => {
  const store = useSelector((store) => store.signup);
  console.log(store);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", {
      firstName,
      lastName,
      email,
      password,
    });
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Choose service you want</h2>

            {/* For service provider */}
            <div
              className="flex border-2 border-black rounded cursor-pointer"
              onClick={() => {
                setIsServiceProvider(true);
                setIsClient(false);

                console.log({
                  setIsServiceProvider: isServiceProvider,
                  setIsClient: isClient,
                });
              }}
            >
              <img src="" alt="hand" />
              <div>
                <h3>Offer services</h3>
                <span>Be a Service Provider and Shine!</span>
              </div>
              <div> </div>
            </div>
            <div className="flex">
              <img src="" alt="arrow.png" />
              <span>Connect</span>
            </div>

            {/* For client */}
            <div
              className="flex border-2 border-black rounded cursor-pointer"
              onClick={() => alert("Am a client")}
            >
              <img src="" alt="search.png" />
              <div>
                <h3>Discover Services</h3>
                <span>Find the Perfect Services for Your Needs!</span>
              </div>
              <div> </div>
            </div>

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Personal Information</h2>
            <form className="flex flex-col">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Account Information</h2>
            <form className="flex flex-col">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div>
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
                <button type="submit" onClick={handleSubmit}>
                  Register
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-1/2 h-screen justify-center m-auto">
        <h1 className="flex justify-center text-xl font-bold">Signup Page</h1>
        {renderForm()}
      </div>
    </>
  );
};

export default Register;
