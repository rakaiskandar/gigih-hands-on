const { getSongs } = require("../models/songs")

const playSongs = (id) => {
    const findSongs = getSongs(id);

    if(!findSongs){
        throw new Error("Songs not found");
    } else {
        findSongs.total = findSongs.total + 1;
    }

    return findSongs;
}

module.exports = {
    playSongs
};