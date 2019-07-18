const express = require("express");

const db = require("./recipe_model.js");

const router = express.Router();

router.get("/", (req, res) => {
  db.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.get("/:id", (req, res) => {
  db.findIngredients(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
router.get("/instructions/:id", (req, res) => {
  db.findInstructions(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
module.exports = router;
