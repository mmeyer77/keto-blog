"use strict";
const router = require("express").Router();
let Article = require("../models/article.model");

// --ROUTER FOR LATEST POSTS//
router.route("/latest").get((req, res) => {
  Article.find()
    .sort({ _id: -1 })
    .limit(1)
    .then((articles) => res.json(articles))
    .catch((err) => res.status(400).json("ErrorEsctricto2: " + err));
});
