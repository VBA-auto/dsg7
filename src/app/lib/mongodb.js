import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${
  process.env.PUBLIC_MONGO_USER
}:${encodeURIComponent(
  process.env.PUBLIC_MONGO_PASS
)}@vba-vidange.id4f1k4.mongodb.net/?retryWrites=true&w=majority&appName=VBA-Vidange`;

let client;
let clientPromise;

if (!client) {
  client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000,
  });
  clientPromise = client.connect();
}

export default clientPromise;
