const mongoose = require('mongoose');


const SkillSchema = new mongoose.Schema({
    skill_name:{
        type: String,
        required: true,
    },
    skill_img:{
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

const Skill = mongoose.model("skills", SkillSchema)
module.exports = Skill;