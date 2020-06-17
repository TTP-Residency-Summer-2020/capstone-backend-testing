var firebase = require("firebase-admin");
firebase.initializeApp();

var db = firebase.firestore();

module.exports = db;