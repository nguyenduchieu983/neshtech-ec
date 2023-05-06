const admin = require("firebase-admin");
const path = require('path')

admin.initializeApp({
  credential: admin.credential.cert( path.join(__dirname, 'serviceAccountKey.json')),
  storageBucket: "neshtech-ca7cf.appspot.com",
});
const bucket = admin.storage().bucket();
module.exports = {
  bucket,
};
