const db = require("../models");

module.exports = {
  getFavorites: function (req, res) {
    db.Book
      .find({}, function (err, favorites) {
        if (err) throw err
        res.json(favorites)
      })
  },

  addOne: function (req, res) {
    db.Book
      .create(req.body)
      .then(book => res.json(book))
      .catch(err => res.json(err))
  },

  deleteOne: function (req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
