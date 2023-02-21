var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello!",
    user: "Max",
    added: new Date(),
  },
  {
    text: "Yo",
    user: "Daniel",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Form" });
});

router.post("/new", function (req, res, next) {
  const message = req.body.message;
  const name = req.body.name;
  messages.push({ text: message, user: name, added: new Date() });
  res.redirect("/")
});

module.exports = router;
