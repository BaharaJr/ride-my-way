import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import Rides from '../controllers/rides';
import User from '../auth/index';

const router = Router();

router.post('/auth/register', User.register);
router.post('/auth/login', User.login);
router.get('/rides', Rides.getAll);
router.get('/rides/:id', Rides.getOne);
router.post('/users/rides', Rides.create);
router.get('/', (req, res) => {
  res.send('APIS');
});
router.use('/', swaggerUi.serve);

export default router;
