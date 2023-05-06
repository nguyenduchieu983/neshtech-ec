"use strict";
const mongoose = require("mongoose");
/** @class staff
 * @description
 */
const Staff = mongoose.Schema(
  {
    age: { type: Number },
    name: { type: String },
    email: { type: String, unique: true },
    depCode: { type: String },
    avatar: { type: String },
  },
  { versionKey: false, timestamps: true }
);

/**@memberOf Staff*/
Staff.statics.objectId = function (id) {
  return mongoose.Types.ObjectId(id);
};

module.exports = {
  Staff: mongoose.model("staff", Staff),
};
