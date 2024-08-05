import { Router } from 'express';
import authRouter from './auth.route';

const router = Router();
router.get('', (req, res) => {
    res.send('<h1>auth service run!</h1>');
});

router.use(
    '/auth',
    (req, res, next) => {
        console.log('Call auth service!');
        next();
    },
    authRouter,
);

export default router;
