const express = require("express");
const router = express.Router();
const { checkAuthCookie } = require("../services/auth.js");


    router.get("/", checkAuthCookie, function (req, res, next) {
    res.render("competitions/index");
    if(req.user){
        console.log("Slobodan ulaz");
    } else {
        console.log("Zabranjen ulaz");
    }
    
  });

  module.exports = router;