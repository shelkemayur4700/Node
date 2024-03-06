const express = require("express");
const router = express.Router();
const { checkAuthorization } = require("../middlewares/middleware");
const { getuserData } = require("../controllers/usercontroller");
{
  /*----------GET-ALL-USERS-ROUTES-------------- */
}

{
  /* This is a routes level middleware and all the routes defined in this file
 will be protected by this middleware */
}
router.use(checkAuthorization);
{
  /*And if you are using middleware here on specific route level then it specific for that route only */
}
router.get("/", getuserData);
{
  /*----------SIGNIN-ROUTES-------------- */
}

module.exports = router;
