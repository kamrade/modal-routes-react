import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
// const dbUrl = 'mongodb://localhost/b2bcards';
app.use(bodyParser.json());

const cards = require('./data/cards-mock-data');
const loads = require('./data/loads-mock-data');
const orders = require('./data/orders-mock-data');
let alerts = require('./data/alerts-mock-data');

// mongodb.MongoClient.connect(dbUrl, function(err, db) {
    // db.collection('cards').find({}).toArray((err, cards) => {
    //   res.json({ cards });
    // });
// });

// Just for now let's use dummy mock data

app.get('/api/cards', (req, res) => {
  res.json({ cards });
});

app.get('/api/orders', (req, res) => {
  res.json({ orders });
});

app.get('/api/loads', (req, res) => {
  res.json({ loads });
});

app.get('/api/alerts', (req, res) => {
  res.json({ alerts });
});

app.post('/api/alert', (req, res) => {
  let id = req.body.id;
  alerts = alerts.filter(item => {
    return item._id !== id;
  });
  console.log('remove alert. left:', alerts.length);
  res.json({ alerts });
});

app.listen(8080, () => console.log('Server is running on localhost:8080'));
