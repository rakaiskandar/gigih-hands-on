const express = require('express');
const songsController = require('../controllers/songsController');
const router = express.Router();

router.get('/songs', songsController.getPlaylist);
router.post('/songs', songsController.postSong);
router.get('/songs/top', songsController.topSongs);
router.post('/songs/play/:id', songsController.playSong);

module.exports = router;

