// import  config  from '../configs/index.js';
import { config } from '../configs/index';
import jwt from 'jsonwebtoken';

export default {
    sign: (userId: number) => {
        const access_token = jwt.sign(
            {
                userId: userId,
            },
            config.jwt.secret,
            {
                expiresIn: config.jwt.ttl,
            },
        );

        return access_token;
    },
    signRefreshToken: (userId: number) => {
        const refresh_token = jwt.sign(
            {
                userId: userId,
            },
            config.jwt.secret,
            {
                expiresIn: '1y',
            },
        );

        return refresh_token;
    },
    // verifyToken: (token: string) => {
    //     jwt.verify(token, config.jwt.secret, (err: Error, data: any) => {
    //         if (err) return { accessToken: null };
    //         const accessToken = sign(data.userId);
    //         return { accessToken };
    //     });
    // },
};
