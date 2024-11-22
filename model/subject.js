import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  practicals: [ // Renamed for clarity
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Practical",
    },
  ],
});

const SubjectModel = mongoose.model("Subject", SubjectSchema);

export default SubjectModel;