const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://new-user:vkSn1Rz0hp6XhI8O@cluster0.axi9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);
await client.connect();
await listDatabases(client);

async function main() {}
