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
    schoolType,
    classes,
    cbt_center,
    referral_code,
    session,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !phone ||
    !cbt_center ||
    !school ||
    !session ||
    !schoolType ||
    !classes
  ) {
    return res
      .status(400)
      .json({ error: "Please provide the necessary information." });
  }
  try {
    const cbtCentersCapacities = {
      Cybertron: 150,
      BMG: 250,
      Wudil: 200,
      LEGEND: 150,
      Pioneers: 150,
      Butale: 150,
      Hamdala: 150,
      Aua: 150,
    };

    if (!(cbt_center in cbtCentersCapacities)) {
      return res.status(400).json({ error: "Invalid CBT center." });
    }

    const existingStudents = await Student.find({ cbt_center, session });
    const capacityLimit = cbtCentersCapacities[cbt_center];
    if (existingStudents.length >= capacityLimit) {
      return res
        .status(400)
        .json({ error: "Capacity limit reached for this session!" });
    }
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
      schoolType,
      session,
      classes,
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
