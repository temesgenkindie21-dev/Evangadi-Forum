import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Login({ toggleForm }) {
  const [errorMsg, setErrorMsg] = useState("");
  const emailDom = useRef();
  const passwordDom = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;
  };
  return (
    <div className="h-[420px] w-[602px] bg-white rounded-[10px] shadow-md">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center">
          Login to your account
        </h2>
        <p className="text-black text-sm text-center mb-4">
          Don't have an account?
          <span>
            <button
              to=""
              className="text-[#fe8402] hover:underline font-bold ml-1"
              onClick={(e) => {
                e.preventDefault();
                toggleForm();
              }}
            >
              Create a new account
            </button>
          </span>
        </p>
        <div className="mx-[50px]">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
              type="email"
              ref={emailDom}
              name="email"
              id=""
              placeholder="Email address"
              className="text-[16px] mb-4 w-full border-[1px] border-[#cccccc] bg-[rgba(248,248,248,0.5)] p-2.5 rounded-[5px] text-[#212529]"
            />
            <br />
            <input
              type="password"
              ref={passwordDom}
              name="password"
              id=""
              placeholder="Password"
              className="text-[16px] mb-4 w-full border-[1px] border-[#cccccc] bg-[rgba(248,248,248,0.5)] p-2.5 rounded-[5px] text-[#212529]"
            />
            {errorMsg && (
              <small className="text-red-500 mb-3 text-center font-semibold text-[14px]">
                {errorMsg}
              </small>
            )}
            <button
              type="submit"
              className="py-2.5 px-5 text-center bg-[#2600ff] hover:bg-[#fe8402] rounded-[5px] text-white text-[16px] mt-[25px]  w-[200px] mx-auto cursor-pointer"
            >
              Login
            </button>
            <span className="text-center mt-2.5">
              <button
                className="text-[#fe8402] hover:underline font-bold "
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}
              >
                Create a new account
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
