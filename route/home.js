"use strict";
const express = require("express");
const router = express.Router({});
const StaffController = require("../controllers/staffController");
const FileService = require("../services/fileService");
const multer = require("multer");
const fileService = require("../services/fileService");
const upload = multer({
  storage: multer.memoryStorage(),
});

router.get("/staff/list", StaffController.getList);
router.post("/staff/add", StaffController.addStaff);
router.get("/staff/detail/:id", StaffController.getStaffDetail);
router.post("/staff/edit", StaffController.editStaff);

router.post("/upload-image", upload.single("file"), fileService.uploadFile);
module.exports = router;
