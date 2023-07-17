const { getAllSongs, addSongs, getSongs } = require("../models/songs");
const { playSongs } = require('../services/playSongs');
const { sortMostPlayedSongs } = require("../services/sortMostPlayedSongs");

const getPlaylist = (req, res) => {
    res.status(200).send(getAllSongs());
}

const postSong = (req, res) => {
    const { title, artist, url } = req.body;
    const findSongs = getAllSongs().find((song) => song.title === title);

    try {
        
        if (!title || !artist || !url) {
            throw new Error("Parameter not valid");
        } else if(findSongs) {
            res.status(400).json({ message: "Songs already exists"});
        } else {
            addSongs(title, artist, url); 
            res.status(201).json({ message: "Added songs to playlist"});
        }
       
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
}

const topSongs = (req, res) => {
    try {
        const topSong = sortMostPlayedSongs();
        res.status(200).send(topSong); 
    } catch (e) {
        res.status(500).json({ message: e.message }); 
    }
}

const playSong = (req, res) => {
    const { id } = req.params;
    const findSongs = getSongs(id);
    try {
        playSongs(id);
        res.status(200).json({
            message: `${findSongs.title} by ${findSongs.artist} has been played for ${findSongs.total}x`
        }); 
    } catch (e) {
        res.status(500).json({ message: e.message }); 
    }
}

module.exports = {
    getPlaylist, postSong, playSong, topSongs
}