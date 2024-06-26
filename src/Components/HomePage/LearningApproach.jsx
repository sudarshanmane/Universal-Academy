import React from "react";
import school from "../../images/school.png";
import carriculum from "../../images/carriculum.png";
import time from "../../images/time.png";
import faculty from "../../images/faculty.png";
import personalizedAttention from "../../images/personalizedAttention.png";
import dashedImage from "../../images/dashed.png";
import right_arrow from "../../images/right_arrow_yellow.png";
import EnquireButton from "../CommonComponents/EnquireButton";

const learningApproachRaw = [
  {
    img: school,
    info: "Classes are conducted during school hours on school premises",
  },
  {
    img: carriculum,
    info: "ISC curriculum is covered fully with competitive exams",
  },
  {
    img: time,
    info: "Saves precious time for self-study",
  },
  {
    img: faculty,
    info: "Experienced faculty powered by PACE IIT & MEDICAL",
  },
  {
    img: personalizedAttention,
    info: "Smaller batch size for personalized attention",
  },
];

const learningApproachCards = learningApproachRaw.map((el, index) => {
  return (
    <div key={el.info} className="flex gap-4 text-sm">
      <div className="flex flex-col items-center gap-3 m-auto">
        <img src={el.img} alt="" className="h-16 w-16" />
        <span>{el.info}</span>
      </div>
      {/* {learningApproachRaw.length - 1 > index && (
        <img src={dashedImage} className="h-40 mr-4" alt="" />
      )} */}
    </div>
  );
});

const LearningApproach = () => {
  return (
    <div className="bg-29 text-white text-sm pt-5 rounded-3xl">
      <div className="flex flex-col text-center">
        <span className="font-semibold text-lg">OUR</span>
        <span className="uppercase text-fd text- xl  text-2xl font-bold">
          Learning Approach
        </span>
        <div className="mt-6 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {learningApproachCards}
        </div>
        <div className="mt-5 mb-5  m-auto ">
          <EnquireButton changeColor={true}></EnquireButton>
        </div>
      </div>
    </div>
  );
};

export default LearningApproach;
