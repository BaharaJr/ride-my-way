import db from '../db/index';

const Rides = {
  async create(req, res) {
    const text = `INSERT INTO
      ride(pickup, dropoff, date, time)
      VALUES($1, $2, $3, $4)
      returning *`;
    const values = [
      req.body.pickup,
      req.body.dropoff,
      req.body.date,
      req.body.time
    ];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send('Ride offer added');
    } catch(error) {
      return res.status(400).send(error);
    }
  },

  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM ride';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch(error) {
      return res.status(400).send(error);
    }
  },

  async getOne(req, res) {
    const text = 'SELECT * FROM ride WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({'message': 'rides not found'});
      }
      return res.status(200).send(rows[0]);
    } catch(error) {
      return res.status(400).send(error)
    }
  },

  req(req, res) {
    if (!req.body.user_id || !req.body.ride_id) {
      return res.status(400).send({ message: 'Invalid details provided' });
    }

    const query = 'SELECT * FROM rides_requests WHERE user_id = $1 AND ride_id = $2';

    db.query(query, [req.body.user_id, req.body.ride_id])
      .then((result) => {
        if (result.rows[0]) {
          return res.status(400).send({ message: 'You are in this ride' });
        }
        const query = 'INSERT INTO rides_requests (user_id, ride_id) VALUES ($1, $2)';
        db.query(query, [req.body.user_id, req.body.ride_id])
          .then(() => {
            res.status(200).json({ message: 'Your req to join ride sent' });
          })
          .catch(error => error);
      })
      .catch(error => error);
  },
};
export default Rides;


// delete(req, res) {
//   const query = 'DELETE FROM ride WHERE id=$1 returning *';
//   const values = [req.params.id];
//   db.query(query, values)
//     .then((result) => {
//       if (!result.rows[0]) {
//         return res.status(404).send({ message: 'Ride not found' });
//       }
//       return res.status(204).json({ message: 'Ride succesfully deleted' });
//     })
//     .catch(error => res.status(400).send(error));
// },
