const router = require("express").Router();
const animeRoutes = require("./anime");
const userRoutes = require("./user");

// Anime routes /api/anime*
router.use("/anime", animeRoutes);
// User routes /api/user*
router.use("/user", userRoutes);

module.exports = router;
