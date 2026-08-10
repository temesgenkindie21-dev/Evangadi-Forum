import React, { useState } from "react";
import Login from "../Auth/Login";
import About from "../About/About";
import backgroundImg from "../../assets/background.svg";
import Register from "../Auth/Register";

function Section() {
  const [showSignIn, setSignIn] = useState(true);
  function toggleForm() {
    setSignIn((prevState) => !prevState);
  }
  return (
    <section className="relative min-h-screen pt-[90px] overflow-hidden bg-[#f5f5f5]">
      {/* Background Image */}
      <img
        src={backgroundImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {showSignIn ? (
            <Login key="signIn" toggleForm={toggleForm} />
          ) : (
            <Register key="Register" toggleForm={toggleForm} />
          )}
          <About />
        </div>
      </div>
    </section>
  );
}

export default Section;
