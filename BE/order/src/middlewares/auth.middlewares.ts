import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { EStatusCode } from '../common/Constants/StatusCode';

export function authMiddleware(req: Request, res: Response, next: any) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(EStatusCode.INVALID_INPUT).json({ message: 'Token not provided.' });
    }
    try {
        const decoded = jwt.verify(token?.replace('Bearer', '')?.replace('bearer', '')?.trim(), '12233');

        // @ts-ignore
        req.user = decoded; // {id: string, member_id: string}
        next();
    } catch (error) {
        res.status(EStatusCode.UNAUTHORIZED).json({ isSuccess: false, message: 'Invalid token.' });
    }
}
