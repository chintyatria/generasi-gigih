const { getDb } = require("../db");

const collectionName = "artists";

const createArtist = async (artist) => {
  const collection = getDb().collection(collectionName);
  const result = await collection.insertOne(artist);
  return result;
};

module.exports = {
  createArtist,
};
