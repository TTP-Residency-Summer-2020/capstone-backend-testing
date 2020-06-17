var express = require("express");
var router = express.Router();
var db = require("./db");

// http://localhost:5001/firebase-testing-emulator/us-central1/app/api/students
router.get("/", (req, res) =>
{
    res.send("Students Route");
});

/**
 * GET student object from their id
 * /api/students/id/:id
 *
 * /api/students/id/10 would return the student object with id 10, if it exists
 *
 * Returns: the student object associated with the id
 *
 * Return status:
 * 200 - OK
 * 404 - Not found
 */
router.get("/id/:id", async (req, res) =>
{
    const { id } = req.params;

    await db.collection("Students")
    .doc(id).get()
    .then((doc) =>
    {
        if(!doc.exists) res.status(404).send("Error getting a student. Is the ID correct?");
        else res.status(200).send(doc.data());
    })
    .catch((err) => console.error(err));
});

module.exports = router;