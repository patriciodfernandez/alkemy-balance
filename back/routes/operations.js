const router = require("express").Router();

const { addOne, getAll } = require("../controllers/operations");

router.post("/", addOne);
router.get("/", getAll );

module.exports = router;
