require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

const url = process.env.DB_URL;
const dbName = process.env.DB_NAME;

let db;

const connect = async () => {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    db = client.db(dbName);
    console.log(`Connected to database ${dbName}`);
  } catch (err) {
    console.log(err);
  }
};

const getDb = () => {
  if (!db) {
    throw Error("Database not initialized.");
  }
  return db;
};

module.exports = {
  connect,
  getDb,
};
