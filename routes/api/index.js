const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
  .get(booksController.getFavorites)
  .post(booksController.addOne)

router.route("/:id")
  .delete(booksController.deleteOne)

module.exports = router;