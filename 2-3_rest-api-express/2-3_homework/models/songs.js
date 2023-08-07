const { generateRandomId } = require("../utils/utilities");

const playlist = [
    {   
        id: "957212277",
        title: "Always",
        artist: ["Daniel Caesar"],
        total: 3,
        url: "https://open.spotify.com/track/71XJNtOdwmL1UWOQQvsKoH?si=c0ab9e044e334f2e",
    },
    {   
        id: "957212256",
        title: "Sunflower",
        artist: ["Rex Orange County"],
        total: 1,
        url: "https://open.spotify.com/track/71XJNtOdwmL1UWOQQvsKoH?si=c0ab9e044e334f2e",
    },
    {   
        id: "9572122199",
        title: "Chamber Of Reflection",
        artist: ["Mac Demarco"],
        total: 10,
        url: "https://open.spotify.com/track/7H7NyZ3G075GqPx2evsfeb?si=8d889d7a95b94b88",
    }
]

const getAllSongs = () => {
    return playlist;
}

const getSongs = (id) => {
    return playlist.find((s) => s.id === id)
}

const addSongs = (title, artist, url) => {
    let newSongs = {
        id: generateRandomId(),
        title: title,
        artist: artist,
        total: 0,
        url: url,
    }
    playlist.push(newSongs);
    return playlist;
}

module.exports = {
    getAllSongs, getSongs, addSongs, playlist
}