import React from "react";

import evangadiLogo from "../../assets/evangadi-footer-logo.png";
import EvangadiBoy from "../../assets/externalpage.jpg";
import Footer from "../../Components/Footer/Footer";

function Main() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${EvangadiBoy})`,
        }}
      >
        {/* Header */}
        <header className="w-full pt-5">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex items-center justify-between font-bold text-xl">
              {/* Logo */}
              <a href="/" className="shrink-0">
                <img
                  src={evangadiLogo}
                  alt="Evangadi Forum"
                  className="w-[198px] h-[40px] object-contain border-[3px] border-black rounded-[5px] pr-2.5 cursor-pointer"
                />
              </a>

              {/* Navigation */}
              <div className="flex items-center gap-16">
                <a
                  href="/home"
                  className="text-white hover:text-[#fe8402] hover:underline transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/howitworks"
                  className="text-white hover:text-[#fe8402] hover:underline transition duration-300"
                >
                  How It Works
                </a>
                <a
                  href="/login"
                  className="
                      px-6
                      py-2.5
                      bg-white
                      hover:bg-[#fe8402]
                      hover:text-white
                      rounded-full
                      text-black
                      cursor-pointer
                      transition
                      duration-300
                    "
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Main;
