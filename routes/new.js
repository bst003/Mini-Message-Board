const express = require("express");
const router = express.Router();

/* GET new message form. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
