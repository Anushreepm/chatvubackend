const express = require("express");
const router = express.Router();
const { listUsers } = require("../controller/users");

router.get("/list-users", listUsers);

module.exports = router;
