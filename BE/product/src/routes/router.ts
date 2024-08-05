import { Router } from 'express';
// import memberRouter from './member.route';

const router = Router();
router.get('', (req, res) => {
  res.send('<h1>Member service run!</h1>');
});

// router.use(
//   '/members',
//   (req, res, next) => {
//     console.log('Call member service!');
//     next();
//   },
//   memberRouter,
// );

export default router;