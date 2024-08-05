import 'dotenv/config';
// import Database from './database/Database';
import express from 'express';
import router from './routes/router';
import { ENV } from './environment';
import cors from 'cors';


export const memberService = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(router);
//   await Database.run();
  app.listen(ENV.PORT, () => {
    console.log(`\x1b[1m${"Service"}\x1b[0m running on \x1b[4m PORT ${ENV.PORT}\x1b[0m`);
  });
};

memberService();