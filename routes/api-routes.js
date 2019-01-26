var db = require("../models");

module.exports = function (app) {

  app.get("/api/get", function (req, res) {
    db.Breakfast.findAll({}).then(function (results) {
      return res.json(results);
    });
  });

  app.post("/api/get", function (req, res) {
    console.log(req.body);
    db.Breakfast.create({
      name: req.body.name,
      url: req.body.url
    }).then(function (dbBreakfast) {
      res.json(dbBreakfast);
    });
  });
};
