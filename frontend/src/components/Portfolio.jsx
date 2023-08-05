import axios from "axios";
import React, { useEffect, useState } from "react";
import API_LINK from "../../api";

const Portfolio = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    // Fetch skill data from the backend when the component mounts
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${API_LINK}/read_proj`);
      if (response.status === 200) {
        setProject(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:px-10 px-7 my-8" id="portfolio">
      <h1 className="text-primary text-blue-300 font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
      {project.map((projects) => (
       <div className="hover:bg-gray-500  max-w-sm rounded overflow-hidden shadow-lg">
          <div 
           key={projects._id} 
          className="w-full h-40 flex items-center justify-center ">
          {projects.project_img && (
              <img src={projects.project_img.url} alt={projects.project_name} />
            )}
          </div>
          <div className="px-6 py-4 mt-14">
            <div className="font-bold text-blue-400 text-xl mb-1">{projects.project_name}</div>
            <span className="text-white"> {projects.project_desc}</span>
            <br></br>
            <button
              className="px-4 py-1 text-sm text-white mt-5 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Show more
            </button>
          </div>
        </div>
            ))}
      </div>
    </div>
  );
};

export default Portfolio;
