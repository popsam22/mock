const express = require("express");
const addStudent = require("../controllers/student");

const router = express.Router();

router.post("/", addStudent);

module.exports = router;
