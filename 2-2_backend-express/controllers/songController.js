let playlist = [];

const songs_index = (req, res) => {
    res.send(playlist);
}

const songs_create_post = (req, res) => {
    const songs = req.body;
    playlist.push(songs);
    res.send(playlist);
}

const songs_play = (req, res) => {
    const index = req.params.play;
    const url = playlist[index].url;
    res.send(`Songs played ${url}`);
}

module.exports = {
    songs_index, songs_create_post, songs_play
};