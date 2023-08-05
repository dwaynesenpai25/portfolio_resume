const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    project_name:{
        type: String,
        required: true,
    },
    project_desc:{
        type: String,
        required: true,
    },
    project_img:{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    }
})

const Project = mongoose.model("projects", ProjectSchema)
module.exports = Project;