import axios from "axios";

export default {
  getAnime: function() {
    return axios.get("/api/anime");
  },

  getAnimeById: function(id) {
    return axios.get("api/anime/" + id);
  },

  saveAnime: function(animeData) {
    return axios.post("api/anime", animeData);
  },

  deleteAnime: function(id) {
    return axios.delete("api/anime/" + id);
  },

  testUserRouter: function(){
    return axios.get("/api/user/test");
  },

  login: function(userData){
    return axios.post("/api/user/login", userData);
  },

  logout: function(){
    return axios.get("/api/user/logout");
  },

  signup: function(userData){
    return axios.post("/api/user/signup", userData);
  },
  
  getUser: function(){
    return axios.get("/api/user/data");
  }
};
