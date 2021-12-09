const router = require("express").Router();

const { addOne, getAll ,getById,editOne,deleteOne} = require("../controllers/operations");
// ,editOne,deleteOne
router.post("/", addOne);
router.get("/", getAll );
router.get("/:id", getById)
router.put("/:id", editOne);
router.delete("/:id", deleteOne);

module.exports = router;
