var admin = require("firebase-admin");
var serviceAccount = require("./seviceAccountKey.json");
module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db