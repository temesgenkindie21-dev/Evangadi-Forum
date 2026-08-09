import React from "react";
import evangadiLogo from "../../assets/evangadiLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 35) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full ${scroll ? "bg-[#e6e9ec]" : "bg-white"} pb-5 fixed top-0 left-0 right-0 z-50 shadow-lg`}
    >
      <div className="max-w-[1331px] h-[60px] mx-auto p-5 ">
        <div className="flex items-center justify-between max-w-[1200px] w-[1049px] mx-auto">
          <div className="">
            <Link to="/">
              <img
                src={evangadiLogo}
                alt=""
                className="w-[198px] h-[40px] border-[3px] border-black rounded-[5px] pr-2.5 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex items-center w-[338px] text-lg gap-2.5  font-bold">
            <Link to="/home" className="text-black hover:text-[#fe8402]">
              Home
            </Link>
            <Link to="/howitworks" className="text-black hover:text-[#fe8402]">
              How it work
            </Link>

            <button className="ml-5 p-2.5 bg-[rgb(81,108,240)] hover:bg-[rgb(254,132,2)] rounded-[5px] w-[130px] text-white">
              <Link to={"/login"}>{"Sign In"}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
