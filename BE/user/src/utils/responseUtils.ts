import { Response } from '../common/models/Api';

export default {
    ok: (res: Response, data: any) => {
        return res.status(200).send({
            success: true,
            data,
            status: 200,
            message: 'ok',
        });
    },

    notFound: (res: Response, message: string | undefined) => {
        return res.status(404).send({
            success: false,
            status: 404,
            message: message || 'Cannot find resouces',
        });
    },

    error: (res: Response, message: string | undefined) => {
        return res.status(500).send({
            success: false,
            status: 500,
            message: message || 'Internal server error',
        });
    },

    unauthorized: (res: Response, message: string | undefined) => {
        return res.status(401).send({
            success: false,
            status: 401,
            message: message || 'Unauthorized',
        });
    },

    invalidated: (res: Response, errors: any) => {
        return res.status(422).send({
            success: false,
            status: 422,
            data: errors,
        });
    },
};
