import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
// const dbUrl = 'mongodb://localhost/b2bcards';
app.use(bodyParser.json());

const cards = require('./data/cards-mock-data');
const loads = require('./data/loads-mock-data');
let alerts = [
  {
    _id: 1,
    message: "Pariatur quod veniam rem aperiam laboriosam autem, adipisci ut tenetur, voluptates ad! Omnis quia ad expedita."
  }, {
    _id: 2,
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem iusto esse corrupti eum, aliquam."
  }, {
    _id: 3,
    message: "Short message."
  },
];

// mongodb.MongoClient.connect(dbUrl, function(err, db) {
    // db.collection('cards').find({}).toArray((err, cards) => {
    //   res.json({ cards });
    // });
// });

// Just for now let's use dummy mock data

app.get('/api/cards', (req, res) => {
  console.log('get all cards');
  res.json({ cards });
});

app.get('/api/loads', (req, res) => {
  console.log('get all loads');
  res.json({ loads });
});

app.get('/api/alerts', (req, res) => {
  console.log('get all alerts');
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
