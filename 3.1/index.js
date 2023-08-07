const { connect } = require("./db");
const { createSong } = require("./models/song");
const { createArtist } = require("./models/artists");
const { createPopularSong } = require("./models/popularSongs");

const run = async () => {
  await connect();

  // Populate songs
  const songs = [
    { title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)" },
    {
      title: "Bad Guy",
      artist: "Billie Eilish",
      album: "When We All Fall Asleep, Where Do We Go?",
    },
    { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
    { title: "Circles", artist: "Post Malone", album: "Hollywood's Bleeding" },
    {
      title: "Dance Monkey",
      artist: "Tones and I",
      album: "The Kids Are Coming",
    },
    {
      title: "Sunflower",
      artist: "Post Malone",
      album: "Spider-Man: Into the Spider-Verse",
    },
    {
      title: "Someone You Loved",
      artist: "Lewis Capaldi",
      album: "Divinely Uninspired to a Hellish Extent",
    },
    { title: "Senorita", artist: "Shawn Mendes", album: "Shawn Mendes" },
    { title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line" },
    { title: "Yummy", artist: "Justin Bieber", album: "Changes" },
  ];

  for (let song of songs) {
    await createSong(song);
  }

  // Populate artists
  const artists = [
    {
      name: "Ed Sheeran",
      date_of_birth: "1991-02-17",
      genres: ["Pop", "Folk Pop", "UK Pop"],
    },
    {
      name: "Billie Eilish",
      date_of_birth: "2001-12-18",
      genres: ["Electropop", "Pop", "Dark Pop"],
    },
    {
      name: "The Weeknd",
      date_of_birth: "1990-02-16",
      genres: ["Canadian Contemporary R&B", "Canadian Pop", "Pop"],
    },
    {
      name: "Post Malone",
      date_of_birth: "1995-07-04",
      genres: ["DFW Rap", "Melodic Rap", "Rap"],
    },
    {
      name: "Tones and I",
      date_of_birth: "2000-08-15",
      genres: ["Australian Pop", "Pop"],
    },
    {
      name: "Lewis Capaldi",
      date_of_birth: "1997-07-07",
      genres: ["Pop", "UK Pop"],
    },
    {
      name: "Shawn Mendes",
      date_of_birth: "1998-08-08",
      genres: ["Canadian Pop", "Pop", "Post-Teen Pop"],
    },
    {
      name: "Harry Styles",
      date_of_birth: "1994-02-01",
      genres: ["Pop", "Pop Rock"],
    },
    {
      name: "Justin Bieber",
      date_of_birth: "1994-03-01",
      genres: ["Canadian Pop", "Pop", "Post-Teen Pop"],
    },
    {
      name: "Dua Lipa",
      date_of_birth: "1995-08-22",
      genres: ["Dance Pop", "Pop", "UK Pop"],
    },
  ];

  for (let artist of artists) {
    await createArtist(artist);
  }

  // Populate popular songs
  const popularSongs = [
    { title: "Shape of You", plays: 2450000000, period: "2022-01" },
    { title: "Bad Guy", plays: 2070000000, period: "2022-02" },
    { title: "Blinding Lights", plays: 2050000000, period: "2022-03" },
    { title: "Circles", plays: 2000000000, period: "2022-04" },
    { title: "Dance Monkey", plays: 1970000000, period: "2022-05" },
    { title: "Sunflower", plays: 1950000000, period: "2022-06" },
    { title: "Someone You Loved", plays: 1920000000, period: "2022-07" },
    { title: "Senorita", plays: 1900000000, period: "2022-08" },
    { title: "Watermelon Sugar", plays: 1850000000, period: "2022-09" },
    { title: "Yummy", plays: 1800000000, period: "2022-10" },
  ];

  for (let song of popularSongs) {
    await createPopularSong(song);
  }

  console.log("Database populated successfully!");
};

run().catch(console.error);
