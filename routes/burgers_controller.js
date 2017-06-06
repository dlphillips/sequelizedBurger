var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/index", function(req, res) {
        db.Burger.findAll( { order: ['burger_name'] }).then(function(data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/", function(req, res) {
        db.Burger.create(
            { burger_name: req.body.burger_name }
        ).then(function() {
            res.redirect("/index");
        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update(
            {devoured: true},
            { where: { id: req.params.id }} 
        ).then(function() {
            res.redirect("/index");
        });
    });
};
