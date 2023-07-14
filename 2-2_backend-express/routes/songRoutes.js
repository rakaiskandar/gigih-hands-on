const express = require('express');
const songController = require('../controllers/songController');
const route = express.Router();

route.get('/songs', songController.songs_index);
route.post('/songs', songController.songs_create_post);
route.get('/songs/:play', songController.songs_play);

module.exports = route;
