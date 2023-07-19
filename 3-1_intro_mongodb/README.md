## Homework GIGIH 3.0 Module 3-1
Create database by MongoDB that stores information Songs, Artists, and Popular Songs with data at least 10 data each collection.

## Command MongoDB
Database in MongoDB can created through MongoDB Compass(GUI) or MongoSH.

Create database:
```bash
use Music-App
```

Create collection
```bash
db.Artist
db.Songs
db.TopSongs
```

Run method
```bash
db.Artist.insertMany()
db.Songs.insertMany()
db.TopSongs.insertMany()
```

## About the Project
Full script to create database can see in script.js. Resulted script can see in data folder
