const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const validateID = require("../middleware/validateID");
const createValidator = require("../validators/createValidator");
const editValidator = require("../validators/editValidator");

router.get("/user", apiController.user);
router.get("/list", apiController.list);
router.get("/listById/:id", validateID, apiController.listById);
router.post("/create", createValidator, apiController.create);
router.put("/edit/:id", validateID, editValidator, apiController.edit);
router.delete("/delete/:id", validateID, apiController.delete);

module.exports = router;
