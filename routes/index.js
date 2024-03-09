const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.post("/new", function (req, res, next) {
  console.log(req.body);

  const newMessage = {
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  };

  messages.push(newMessage);

  console.log(messages);

  res.redirect("/");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  const updatedMessages = messages.map((message) => {
    console.log(message);
    message.added = message.added.toLocaleString();

    return message;
  });

  console.log(updatedMessages);

  res.render("index", {
    title: "Mini Messageboard",
    messages: updatedMessages,
  });
});

module.exports = router;
