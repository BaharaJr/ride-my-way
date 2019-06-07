const express = require('express');

const app = express();
// const rideRouter = express.Router();
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const db = require('./db/db');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/rides', (req, res) => {
  res.status(200).send({
    rides: db,
  });
});

app.post('/api/v1/rides', (req, res) => {
  const ride = {
    id: db.length + 1,
    pickup: req.body.pickup,
    dropoff: req.body.dropoff,
    time: req.body.time,
  };
  db.push(ride);
  return res.status(201).send({
    message: 'ride added successfully',
    ride,
  });
});

app.get('/api/v1/rides/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.map((ride) => {
    if (ride.id === id) {
      return res.status(200).send({
        ride,
      });
    }
  });
  return res.status(404).send({
    message: 'ride does not exist',
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

debug(`App is listening on port  ${port}`);
