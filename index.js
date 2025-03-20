// const express = require('express')
// const app = express()
// const port = 5000
// // 端口号


// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://echochat:abc1234@cluster0.d33gz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//   .then(() => console.log("MongoDB Connected!"))
//   .catch(err => console.error(err));


// app.get('/', (req, res) => {
//   res.send('Hello World!~~ good')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/echochat";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('echochat');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log("MongoDB Connected!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);