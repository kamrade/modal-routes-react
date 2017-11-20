import express from 'express';
import mongodb from 'mongodb';

const app = express();
// const dbUrl = 'mongodb://localhost/b2bcards';

const cards = require('./data/cards-mock-data');
const loads = require('./data/loads-mock-data');

// mongodb.MongoClient.connect(dbUrl, function(err, db) {
    // db.collection('cards').find({}).toArray((err, cards) => {
    //   res.json({ cards });
    // });
// });

// Just for now let's use dummy mock data

app.get('/api/cards', (req, res) => {
  res.json({ cards });
})

app.get('/api/loads', (req, res) => {
  res.json({ loads });
})

app.listen(8080, () => console.log('Server is running on localhost:8080'));
