const router = require("express").Router();
const animeController = require("../../controllers/AnimeController");

// Matches with "/api/anime"
router.route("/")
  .get(animeController.findAll)
  .post(animeController.create);

// Matches with "/api/anime/:id"
router
  .route("/:id")
  .get(animeController.findById)
  .put(animeController.update)
  .delete(animeController.remove);

module.exports = router;
