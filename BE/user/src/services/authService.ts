import argon2 from 'argon2';
import jwtUtils from '../utils/jwtUtils';
const db = require('../database/models/index');
// import db from 'models/index';
const authService = {
    create: async ({
        firstName,
        lastName,
        email,
        password,
    }: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }) => {
        const hashPassword = await argon2.hash(password);
        const data = await db.User.create({
            firstName,
            lastName,
            password: hashPassword,
            email,
        });
        const access_token = jwtUtils.sign(data.id);
        return {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            access_token,
        };
    },
    login: async ({ email, password }: { email: string; password: string }) => {
        const user = await db.User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new Error('Email not found');
        }
        const passwordValid = await argon2.verify(user.password, password);
        if (passwordValid) {
            const access_token = 1111111;
            // jwtUtils.sign(user.id);
            return {
                firstName: user.firstName,
                lastName: user.lastName,
                avatar: user.avatar,
                email: user.email,
                access_token,
            };
        } else {
            throw new Error('Incorrect password');
        }
    },
};
export default authService;
