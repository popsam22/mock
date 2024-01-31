const Student = require("../models/student");

const addStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    dob,
    nationality,
    email,
    phone,
    gender,
    parentsName,
    address,
    school,
    cbt_center,
    referral_code,
  } = req.body;

  if (!firstName || !lastName || !phone || !cbt_center || !school) {
    return res
      .status(400)
      .json({ error: "Please provide the necessary information." });
  }
  try {
    const newStudent = await Student.create({
      firstName,
      lastName,
      dob,
      nationality,
      email,
      phone,
      gender,
      parentsName,
      address,
      school,
      cbt_center,
      referral_code,
    });
    res.status(200).json(newStudent);
    console.log(newStudent);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create student" });
  }
};

module.exports = addStudent;
