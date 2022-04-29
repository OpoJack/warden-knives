const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://new-user:Q1EHSnPZ2bG8iTOY@cluster0.axi9j.mongodb.net/warden-knives?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db();
    const products = db.collection("Products");
    const query = { title: "Ashi" };
    console.log(products.find(query, { limit: 9 }));
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run();

// const collectionRef = client.collection(collectionKey);
// console.log(collectionRef);

// const batch = client.batch();
// objectsToAdd.forEach((obj) => {
//   const newDocRef = collectionRef.doc();
//   batch.set(newDocRef, obj);
// });
// };
