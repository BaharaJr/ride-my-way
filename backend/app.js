/* eslint-disable no-console */
const express = require("express");
const app = express();
const rideRouter = require('./routes/rideRouter');

app.use('/api/v1/rideOffers', rideRouter);
app.use('/api/v1/rideRequests', rideRouter);
app.use('/api/v1/rideTaken', rideRouter);


const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);