import React from "react";
import { useNavigate } from "react-router-dom";
import Idea from "../../lottie/skills.json";
import Lottie from "lottie-react";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center bg-gray-200">
      <div className="w-full lg:w-1/2 flex justify-center mt-8 mb-8">
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden w-[80%] lg:w-[50%] p-4">
          <div className="bg-gray-200 flex justify-center">
            {" "}
            <Lottie className="w-2/3" animationData={Idea} />
          </div>

          <div className="mt-4 p-1 rounded">
            <h1 className="text-xl font-bold text-gray-600">EcoCreate</h1>
            <p className="text-md text-gray-400">
              Uniting creative minds to transform waste into wonders. Join
              forces with NGOs nationwide and turn your innovative ideas into
              impactful, sustainable solutions.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center p-4 lg:p-8 lg:mt-8 mb-8 rounded-lg">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
          Unleash Your <span className="text-[#00a99d]">EcoCreate</span> Spirit
        </h1>
        <p className="text-center lg:text-xl text-gray-700 leading-relaxed">
          Welcome to{" "}
          <span className="text-[#00a99d] font-semibold">EcoCreate</span>, where
          waste meets wonder! Join our community of innovators and turn everyday
          waste into extraordinary creations. Whether it's art, crafts, or
          culinary delights, your imagination and skills is the only limit.
          Let's make sustainability stylish, one idea at a time!
        </p>
        <button
          onClick={() => {
            navigate("/skills");
          }}
          className="bg-[#00a99d] hover:bg-[#307371] w-[60%] md:w-1/2 lg:w-1/3 mt-6 py-3 rounded-full text-white text-xl font-semibold shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
        >
          Explore Ideas
        </button>
      </div>
    </div>
  );
};

export default Skills;
