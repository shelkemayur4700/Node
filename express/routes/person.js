const express = require("express");
const data = require("../db");
const router = express.Router();
const { get, create, update, Delete } = require("../controller/person");
//-------------------READ
// router.get("/", (req, res) => {
//   res.send("Hello World");
// });

//Routes for person domain
router.get("/person", get);

//--------------------CREATE CALL---------
router.post("/person", create);
//----------------PUT CALL
router.put("/person", update);
// ---------------------DELETE CALL-----------
router.delete("/person", Delete);

module.exports = router;
