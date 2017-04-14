const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to api party")
})

module.exports = router
