const { getDb } = require("../db");

const collectionName = "songs";

const createSong = async (song) => {
  const collection = getDb().collection(collectionName);
  const result = await collection.insertOne(song);
  return result;
};

module.exports = {
  createSong,
};
