const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cloudinary = require("cloudinary");
const multer = require("multer");
const dotenv = require("dotenv");
const SkillModel = require("./models/skill");
const ProjectModel = require("./models/project");

dotenv.config();
app.use(express.json());
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Check Cloudinary configuration
console.log("Cloudinary Configuration:");
console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);
const storage = multer.diskStorage({});
const upload = multer({
  storage: storage,
});


const MONGO_URI =
  "mongodb+srv://admin:IWlwjs0w7SFvrV6K@portfolio.7w0xjpj.mongodb.net/Dwayne?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});



app.get("/read", async (req, res) => {
  try {
    const skill = await SkillModel.find({});
    res.send({ status: "ok", data: skill });
  } catch (err) {
    console.log(err);
  }
});

app.get("/read_proj", async (req, res) => {
  try {
    const project = await ProjectModel.find({});
    res.send({ status: "ok", data: project });
  } catch (err) {
    console.log(err);
  }
});

app.post("/create", upload.single("skill_img"), async (req, res, next) => {
  const { skill_name } = req.body;
  const skill_img = req.file ? req.file.path : null;
  
  console.log("Skill Name:", skill_name);
  console.log("Skill Image:", skill_img);

  try {
    if (!skill_img) {
      return res.status(400).json({ message: "No image file provided" });
    }

    const result = await cloudinary.v2.uploader.upload(skill_img, {
      folder: "logo",
    });

    const skill = await SkillModel.create({
      skill_name,
      skill_img: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    res.status(201).json({
      success: true,
      skill,
    });
  } catch (error) {
    console.log("Error creating skill:", error);
    res.status(500).json({ error: "Failed to create skill" });
  }
});

app.post("/create_proj", upload.single("project_img"), async (req, res, next) => {
  const { project_name } = req.body;
  const { project_desc } = req.body;
  const project_img = req.file ? req.file.path : null;
  
  console.log("Skill Name:", project_name);
  console.log("Skill Image:", project_desc);
  console.log("Skill Image:", project_img);

  try {
    if (!project_img) {
      return res.status(400).json({ message: "No image file provided" });
    }

    const result = await cloudinary.v2.uploader.upload(project_img, {
      folder: "logo",
    });

    const project = await ProjectModel.create({
      project_name,
      project_desc,
      project_img: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    console.log("Error creating project:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
});

app.listen(8800, () => {
  console.log("Server running on port 8800...");
});
