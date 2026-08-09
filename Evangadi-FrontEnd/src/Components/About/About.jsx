import React from "react";

function About() {
  return (
    <div className="w-[602px] h-[500px]">
      <div className="p-5 ">
        <div className="my-2.5 ml-5">
          <h3 className="text-xl font-medium  text-[#fe8402]">About</h3>
          <h1 className="text-[#4a436c] text-4xl font-bold">
            Evangadi Networks
          </h1>
        </div>
        <div className="p-5">
          <p className="text-[16px] text-start mb-4 font-normal">
            No matter what stage of life your are in, wheather you're just
            starting elemntary schol or being promoted to CEO of a Foutunet
            500company you have much to offer to those who are trying to follow
            in your footsteps.
          </p>
          <p className="text-[16px] text-start mb-4 font-normal">
            Wheather you are willing to share your knowledge or your are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
        </div>
        <button className="text-white text-lg text-center bg-[#fe8402] hover:bg-[#dea76c] mb-5 ml-5 py-2.5 px-5 rounded-[5px] cursor-pointer">
          HOW IT WORKS
        </button>
      </div>
    </div>
  );
}

export default About;
