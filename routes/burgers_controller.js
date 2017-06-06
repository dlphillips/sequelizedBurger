var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/index", function(req, res) {
        db.Burger.findAll( { order: ['burger_name'] }).then(function(data) { // get all records, ordered by name
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject); // send to handlebars to render html
        });
    });

    app.post("/", function(req, res) {
        db.Burger.create(
            { burger_name: req.body.burger_name }
        ).then(function() {
            res.redirect("/index"); // re-render html
        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update(
            {devoured: true},
            { where: { id: req.params.id }} // update devoured to 'true' where id matches req.params.id
        ).then(function() {
            res.redirect("/index"); // re-render html
        });
    });
};
