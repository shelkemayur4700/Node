var express = require("express");
var router = express.Router();
const data = [
  {
    _id: "65d7eafc905ddfd38d6462bb",
    index: 0,
    phone: "+1 (837) 539-2658",
  },
  {
    _id: "65d7eafc8667ecf8618b1ff7",
    index: 1,
    phone: "+1 (949) 463-2859",
  },
  {
    _id: "65d7eafc2a552a54592c0289",
    index: 2,
    phone: "+1 (949) 482-3978",
  },
  {
    _id: "65d7eafc7f9efc65055410e4",
    index: 3,
    phone: "+1 (851) 536-3034",
  },
  {
    _id: "65d7eafcc0831175bba74c69",
    index: 4,
    phone: "+1 (865) 453-2136",
  },
  {
    _id: "65d7eafcce3a87219072aec5",
    index: 5,
    phone: "+1 (816) 435-2081",
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/list", function (req, res, next) {
  res.render("users", { data: data });
});
router.get("/userprofile", function (req, res, next) {
  res.render("userprofile"); //express automaticlly go and find file and render it
});

module.exports = router;
