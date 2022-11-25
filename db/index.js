// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = "mongodb+srv://oliwia:inA6h2be4qsQBbtt@cluster07.bnum0b9.mongodb.net/?retryWrites=true&w=majority"
// mongodb+srv://<username>:<password>@cluster0.qigf07j.mongodb.net/?retryWrites=true&w=majority
  // process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/final-project";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });