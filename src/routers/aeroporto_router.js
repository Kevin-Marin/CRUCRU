const express = require("express");
const router = express.Router();

const aeroporto_controller = require("../controllers/aeroporto_controller.js");

router.post("/", aeroporto_controller.store);
router.get("/", aeroporto_controller.index);
router.get("/:id", aeroporto_controller.show);
router.put("/:id", aeroporto_controller.update);
router.delete("/:id", aeroporto_controller.destroy);

module.exports = router;