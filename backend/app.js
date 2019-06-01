/* eslint-disable no-console */
const express = require("express");
const app = express();
const rideRouter = require('./routes/rideRouter');

app.use('/api/v1/rideOffers', rideRouter);
app.use('/api/v1/rideRequests', rideRouter);
app.use('/api/v1/rideTaken', rideRouter);

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
  
  app.get("/api/v1/rideRequests", (req, res) => {
    var rideRequests = [
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Name: "Bennett",
        Phone: "098765432"
      },
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Name: "Bennett",
        Phone: "098765432"
      },
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Name: "Bennett",
        Phone: "098765432"
      },
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Name: "Bennett",
        Phone: "098765432"
      },
    ];
    res.json(rideRequests);
  });
  
  app.get("/api/v1/rideTaken", (req, res) => {
    var rideTaken = [
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Driver: "Bennett",
        Car: "T45DSA",
        Date: "28/10/2019"
      },
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Driver: "Bennett",
        Car: "T45DSA",
        Date: "28/10/2019"
      },
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Driver: "Bennett",
        Car: "T45DSA",
        Date: "28/10/2019"
      },
      {
        id: 1,
        Pickup: "Magomeni",
        Dropoff: "Indira Ghandi",
        Driver: "Bennett",
        Car: "T45DSA",
        Date: "28/10/2019"
      },
    ];
    res.json(rideTaken);
  });


const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);