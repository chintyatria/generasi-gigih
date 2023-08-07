// Import required modules
const { MongoClient } = require("mongodb");

// Connection
async function connect() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  return client.db("gigih");
}

module.exports = connect;
