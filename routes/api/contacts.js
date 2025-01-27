const express = require("express");

const ctrl = require("../../controllers/contacts");

const {validateBody} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.post);

router.put("/:id", validateBody(schemas.addSchema), ctrl.update);

router.delete("/:id", ctrl.remove);

module.exports = router;