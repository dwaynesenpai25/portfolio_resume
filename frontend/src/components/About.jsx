import axios from "axios";
import React, { useEffect, useState } from "react";
// import Services from "./Services";

const About = () => {
  const [skills, setSkill] = useState([]);


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8800/read")
  //     .then((response) => setSkill(response.data.data))
  //     .catch((err) => console.log(err));
  // }, []);
  useEffect(() => {
    // Fetch skill data from the backend when the component mounts
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:8800/read");
      if (response.status === 200) {
        setSkill(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:px-10 px-7" id="about">
      <h1 className="text-blue-500 font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is Francis Dwayne, an IT graduate fueled by a passion for
        technology and innovation. With expertise in web and mobile app
        development, data analysis, and problem-solving, I'm dedicated to
        creating impactful solutions. Let's connect and explore the
        possibilities together!
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-blue-500 text-8xl font-bold">5+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill._id} // Replace "_id" with the unique identifier of each skill item in your skills array
            className="bg-light hover:bg-blue-500 flex flex-col items-baseline justify-end md:m-3 p-5 shadow-sm skills transition-all duration-500"
          >
            {skill.skill_img && (
              <img src={skill.skill_img.url} alt={skill.skill_name} />
            )}
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.skill_name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      {/* <Services/> */}
    </div>
  );
};

export default About;
