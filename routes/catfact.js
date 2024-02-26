var express = require("express");
var router = express.Router();

/* GET cat fact. */
router.get("/fact", async function (req, res) {
  const fact = await fetch(
    "https://catfact.ninja/facts?page=" + Math.floor(Math.random() * 33)
  ).then((res) => res.json());
  console.log(fact);
  res.render("cat/fact", { catFact: fact, title: "Cat Fact" });
});

module.exports = router;
