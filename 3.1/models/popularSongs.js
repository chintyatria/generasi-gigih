const { getDb } = require("../db");

const collectionName = "popular_songs";

const createPopularSong = async (song) => {
  const collection = getDb().collection(collectionName);
  const result = await collection.insertOne(song);
  return result;
};

module.exports = {
  createPopularSong,
};
