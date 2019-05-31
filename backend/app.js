/* eslint-disable no-console */
const express = require("express");
const app = express();
const rideRouter = express.Router();

rideRouter.route('/ride')
.get((req, res) => {
  const response = {hello: 'Blove was here'};
  res.json(response)
});
app.use('/api/v1', rideRouter);

app.get("/", (req, res) => {
  var rideOffers = "basically nothing here"
  res.json(rideOffers);
});


app.get("/api/v1/rideOffers", (req, res) => {
  var rideOffers = [
    {
      id: 1,
      Pickup: "Magomeni",
      Dropoff: "Indira Ghandi",
      Date: "July 24",
      Time: "14:00"
    },
    {
      id: 2,
      Pickup: "Mbweni",
      Dropoff: "Tegeta",
      Date: "March 21",
      Time: "1:00"
    },
    { id: 3, 
      Pickup: "Mikasa", 
      Dropoff: "Dar", 
      Date: "May 24", 
      Time: "4:00" 
    },
    {
      id: 4,
      Pickup: "Mtwara",
      Dropoff: "Mwanza",
      Date: "October 2",
      Time: "0:00"
    }
  ];
  res.json(rideOffers);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);