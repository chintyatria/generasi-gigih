// Import
const express = require("express");
const connect = require("./db");
const Playlist = require("./model/playlist");
const fs = require("fs");

const app = express();

app.use(express.json());

connect().then(async (db) => {
  const playlist = new Playlist(db);

  const songs = JSON.parse(fs.readFileSync("songs.json", "utf-8"));
  for (let song of songs) {
    await playlist.addSong(song.title, song.artists, song.url);
  }

  app.post("/add-song", async (req, res) => {
    await playlist.addSong(req.body.title, req.body.artists, req.body.url);
    res.send("Song added to the playlist");
  });

  app.post("/play-song", async (req, res) => {
    const url = await playlist.playSong(req.body.title);

    if (url) {
      res.send(`Playing song: ${url}`);
    } else {
      res.status(404).send("Song not found");
    }
  });

  app.get("/songs", async (req, res) => {
    const songs = await playlist.getListOfSongs();
    res.json(songs);
  });

  app.get("/most-played", async (req, res) => {
    const songs = await playlist.getMostPlayed();
    res.json(songs);
  });

  app.listen(3000, () => console.log("Server is running on port 3000"));
});
