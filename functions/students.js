var express = require("express");
var router = express.Router();

// http://localhost:5001/firebase-testing-emulator/us-central1/app/api/students
router.get("/", (req, res) =>
{
    res.send("Students Route");
});

module.exports = router;