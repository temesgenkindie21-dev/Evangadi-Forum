import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

function Register({ toggleForm }) {
  const [errorMsg, setErrorMsg] = useState("");
  const userNameDom = useRef();
  const firstNameDom = useRef();
  const lastNameDome = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userNameValue = userNameDom.current.value;
    const firstNameValue = firstNameDom.current.value;
    const lastNameValue = lastNameDome.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (
      !userNameValue ||
      !firstNameValue ||
      !lastNameValue ||
      !emailValue ||
      !passwordValue
    ) {
      setErrorMsg("Please provide all required information");
      return;
    }
  };

  return (
    <div className="h-[560px] w-[540px] bg-white rounded-[5px] shadow-md">
      <div className="p-5">
        <h2 className="text-2xl font-bold text-center">Join the network</h2>
        <p className="text-black text-sm text-center mb-4">
          Already have an account?
          <span>
            <Link
              to=""
              className="text-[#fe8402] hover:underline font-bold ml-1"
              onClick={(e) => {
                e.preventDefault();
                toggleForm();
              }}
            >
              Sign in
            </Link>
          </span>
        </p>
        <div className="mx-[50px]">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
              type="text"
              ref={userNameDom}
              name="userName"
              id=""
              placeholder="User Name"
              className="text-[16px] mb-4 w-full border-[1px] border-[#cccccc] bg-[rgba(248,248,248,0.5)] p-2.5 rounded-[5px] text-[#212529]"
            />
            <br />
            <div className="w-full flex gap-2.5">
              <input
                type="text"
                ref={firstNameDom}
                name="firstName"
                id=""
                placeholder="First Name"
                className="text-[16px] mb-4 border-[1px] border-[#cccccc] bg-[rgba(248,248,248,0.5)] p-2.5 rounded-[5px] text-[#212529]"
              />

              <input
                type="text"
                ref={lastNameDome}
                name="lastName"
                id=""
                placeholder="Last Name"
                className="text-[16px] mb-4  border-[1px] border-[#cccccc] bg-[rgba(248,248,248,0.5)] p-2.5 rounded-[5px] text-[#212529]"
              />
            </div>
            <br />
            <input
              type="email"
              ref={emailDom}
              name="email"
              id=""
              placeholder="Email"
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
              Create Account
            </button>
            <div className="text-center mt-2.5">
              <p className="text-[#fe8402] hover:underline font-bold ">
                I agree to the
                <Link
                  to=""
                  className="text-[#fe8402] hover:underline font-bold "
                >
                  privacy policy
                </Link>
                and
                <Link
                  to=""
                  className="text-[#fe8402] hover:underline font-bold "
                >
                  terms of service
                </Link>
                .
              </p>
            </div>
            <div className="text-center mt-2.5">
              <Link
                to=""
                className="text-[#fe8402] hover:underline font-bold "
                onClick={(e) => {
                  e.preventDefault();
                  toggleForm();
                }}
              >
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
