const express = require('express');
const app = express();

app.get('/api/v1/rideOffers', (req,res) => {
    var rideOffers= [
        {id:1, Pickup: 'Magomeni', Drop_off: 'Indira Ghandi', Date:'July 24', Time:  '14:00'},
        {id:2, Pickup: 'Mbweni', Drop_off: 'Tegeta', Date:'March 21', Time:  '1:00'},
        {id:3, Pickup: 'Mikasa', Drop_off: 'Dar', Date:'May 24', Time:  '4:00'},
        {id:4, Pickup: 'Mtwara', Drop_off: 'Mwanza', Date:'October 2', Time:  '0:00'}
    ];
    res.json(rideOffers);
    
});

const port = process.env.PORT || 5000; 
app.listen(port);

console.log('App is listening on port ' + port);