import React, { useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [project_img, setProjimg] = useState(null);
  const [project_name, setProjname] = useState("");
  const [project_desc, setProjdesc] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = reader.result;
      // Convert the Base64 data to a Blob (File) object
      const blob = dataURLtoBlob(base64String);
      const fileFromBlob = new File([blob], file.name, { type: file.type });
      setProjimg(fileFromBlob);
    };
  };

  // Helper function to convert Base64 data to Blob
  const dataURLtoBlob = (dataURL) => {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      console.log("Skill Name:", project_img);
      console.log("Skill Image:", project_desc);
      console.log("Skill desc:", project_name);

      const formData = new FormData();
      formData.append("project_img", project_img); // Append the skill_img file to formData
      formData.append("project_desc", project_desc);
      formData.append("project_name", project_name);

      const response = await axios.post("http://localhost:8800/create_proj", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setProjname("");
        setProjdesc("");
        setSkillImg(null);
        console.log("Skill created successfully");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container custom_class">
        <h2 className="signup_title">CREATE SKILL</h2>
        <form
          className="col-sm-6 offset-3 pt-5 signup_form"
          encType="multipart/form-data"
        >
          <div className="form-outline mb-4">
            <input
              onChange={(e) => setProjname(e.target.value)}
              type="text"
              id="form4Example1"
              className="form-control"
              value={project_name}
            />
            <label className="form-label" htmlFor="form4Example1">
              Name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              onChange={(e) => setProjdesc(e.target.value)}
              type="text"
              id="form4Example1"
              className="form-control"
              value={project_desc}
            />
            <label className="form-label" htmlFor="form4Example1">
              Description
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              onChange={handleImage}
              type="file"
              id="formupload"
              name="project_img" // Make sure the name attribute matches the backend
              className="form-control"
            />
            <label className="form-label" htmlFor="formupload">
              Image
            </label>
          </div>
          {project_img && <img className="img-fluid" src={project_img} alt="" />}
          <button type="button" onClick={submitForm} className="btn btn-primary btn-block mb-4">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default Portfolio;
