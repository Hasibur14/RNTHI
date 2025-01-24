import { useEffect } from "react";
import { useState } from "react";
import AboutFirstPart from "./AboutFirstPart";
// import About2ndPart from "./About2ndPart";

const About = () => {
  const [firstPart, setFirstPart] = useState([]);
  
  
  
  useEffect(() => {
    fetch("/About/part.json")
      .then((res) => res.json())
      .then((data) => setFirstPart(data));
  }, []);



  return (
    <div className="">
    <div className="absolute  mt-1 md:w-[1475px] md:h-[270px] border-t-2 border-b-2 border-[#F0E19A]">
   </div> 

      <div className="md:w-[1300px]  relative mx-auto border-l-2 border-r-2 mt-2 
       border-[#F0E19A] ">
        {firstPart.map((part1) => (
          <AboutFirstPart key={part1.id} part1={part1}></AboutFirstPart>
        ))}
      </div>

    </div>
  );
};

export default About;
