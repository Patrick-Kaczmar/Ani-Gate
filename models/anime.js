const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema({
  id: { type: String, required: true },
  userID: {type: String, required: true},
  title: { type: String, required: true },
  image: { type: String, required: true },
  synopsis: String,
  url: String,
  date: { type: Date, default: Date.now }
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;
