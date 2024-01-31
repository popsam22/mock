const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    parentsName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    referral_code: {
      type: String,
      default: null,
    },
    school: {
      type: String,
      required: true,
    },
    cbt_center: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("Student", studentSchema);
module.exports = StudentModel;
