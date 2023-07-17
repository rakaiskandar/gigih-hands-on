const { getAllSongs } = require("../models/songs")

const sortMostPlayedSongs = () => {
    let songs = getAllSongs();
    const sortedSongs = songs.sort((a, b) => {
        return b.total - a.total
    });

    if (sortedSongs.length === 0) {
        throw new Error("Error");
    } 

    return sortedSongs;
}

module.exports = {
    sortMostPlayedSongs
}
