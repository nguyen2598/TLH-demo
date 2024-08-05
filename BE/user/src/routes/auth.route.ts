import { Router } from 'express';
import authController from '../controllers/authController';

/**
 * /auths
 */
const authRouter = Router();
authRouter.post('/register', authController.register);
authRouter.get('/login', (req, res) => authController.login(req, res));

export default authRouter;
