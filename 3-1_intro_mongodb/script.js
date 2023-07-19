/* 
    CAUTION: THIS SCRIPT RUN IN MONGOSH AND RUN IT FIRST COMMAND MONGOSH IN README
*/

// Document that we add in collection Songs
const songs = [
    { title: "Always", artist: "Daniel Caesar", album: "Never Enough" },
    { title: "No Other Heart", artist: "Mac Demarco", album: "Another One" },
    { title: "Janji Setia", artist: "Tiara Andini", album: "Tiara Andini" },
    { title: "Could It Be", artist: "Raisa", album: "Raisa" },
    { title: "Ragu", artist: "Rizky Febian", album: "Jejak" },
    { title: "Easy", artist: "Mac Ayres", album: "Drive Slow" },
    { title: "Movie", artist: "Tom Misch", album: "Geography" },
    { title: "Sulung", artist: "Kunto Aji", album: "Mantra Mantra" },
    { title: "Call You Mine", artist: "Jeff Bernat", album: "The Gentlemen Approach" },
    { title: "Home", artist: "Bruno Major", album: "A Song For Every Moon" }
]

// Method to insert multiple data into collection Songs
db.Songs.insertMany(songs);

// Document that we add in collection Artist
const artists = [
    { name: "Daniel Caesar", birth_date: "1995-04-5", genre: "R&B" },
    { name: "Mac Demarco", birth_date: '1990-04-30', genre: 'Indie'},
    { name: "Tiara Andini", birth_date: "2001-09-21", genre: "Pop"},
    { name: "Raisa", birth_date: "1990-06-6", genre: "Pop"},
    { name: "Rizky Febian", birth_date: "1998-02-25", genre: "Pop"},
    { name: "Mac Ayres", birth_date: "1996-12-6", genre: "R&B"},
    { name: "Tom Misch", birth_date: "1995-06-25", genre: "R&B"},
    { name: "Kunto Aji", birth_date: "1987-01-4", genre: "Indie"},
    { name: "Jeff Bernat", birth_date: "1989-12-11", genre: "R&B"},
    { name: "Bruno Major", birth_date: "1988-07-15", genre: "R&B"}
]

// Method to insert multiple data into collection Artist
db.Songs.insertMany(artists);

// Document that we add in collection TopSongs
const topSongs = [
    { title: "Always", track_count: "11609691", periodOfTime: "2023" },
    { title: "Easy", track_count: "5386517", periodOfTime: "2017" },
    { title: "Movie", track_count: "4301366", periodOfTime: "2018" },
    { title: "Call You Mine", track_count: "4289298", periodOfTime: "2011" },
    { title: "Janji Setia", track_count: "3598697", periodOfTime: "2021" },
    { title: "Ragu", track_count: "3368608", periodOfTime: "2018" },
    { title: "Home", track_count: "3341803", periodOfTime: "2017" },
    { title: "No Other Heart", track_count: "3251799", periodOfTime: "2015" },
    { title: "Could It Be", track_count: "3225161", periodOfTime: "2011" },
    { title: "Sulung", track_count: "31644693", periodOfTime: "2018" }
]

// Method to insert multiple data into collection TopSongs
db.Songs.insertMany(topSongs);

