const express = require("express");
const router = express.Router();
const Datastore = require("nedb-promise");
const path = require("path");

let db = new Datastore(path.join(__dirname, "../items.db"));
db.loadDatabase();

/* GET home page. */
router.get("/items", async function(req, res, next) {
  let data = await db.find({});
  res.json(data);
});

router.get("/item/:id", async function(req, res, next) {
  let item = await db.findOne({_id: req.params.id});
  if (item) {
    res.json(item);
  } else {
    res.status(404).end("Couldn't find item id: " + req.params.id);
  }
});

router.post("/item", async function(req, res, next) {
  if (req.body.name && req.body._id && req.body.description) {
    await db.insert(req.body);
    res.status(200).end();
  } else {
    res.status(400).end("Some parameters missing but am lazy to say what.");
  }
});

router.delete("/item/:id", async function(req, res, next) {
  let numRemoved = await db.remove({_id: req.params.id});
  if (numRemoved === 1) {
    res.status(200).end();
  } else {
    res.status(400).end("Couldn't find item to remove.");
  }
});


module.exports = router;
