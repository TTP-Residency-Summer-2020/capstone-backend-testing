const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require("express");
const app = express();
const router = express.Router();

app.use("/api", router);

// http://localhost:5001/firebase-testing-emulator/us-central1/app/api/
router.get("/", (req, res) =>
{
    res.json({ routes: ["students", "courses"] });
});

// Subrouters
const coursesRouter = require("./courses");
const studentsRouter = require("./students");

// Mount subrouters to assemble api router
router.use("/courses", coursesRouter);
router.use("/students", studentsRouter);

exports.app = functions.https.onRequest(app);