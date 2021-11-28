const router = require("express").Router();
 
const {
     addOne,
 } = require("../controllers/operations");
 
 
 
router.post("/", addOne);
 
module.exports = router;
