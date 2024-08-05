import responseUtils from '../utils/responseUtils';
import { Request, Response } from '../common/models/Api';
import authService from '../services/authService';
const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const { firstName, lastName, email, password } = req.body;
            const result = await authService.create({ firstName, lastName, email, password });
            return responseUtils.ok(res, result);
        } catch (error: any) {
            return responseUtils.error(res, error?.message);
        }
    },
    login: async (req: Request, res: Response) => {
        try {
            const { password, email } = req.body;
            console.log({ password, email });
            const result = await authService.login({ password, email });
            return responseUtils.ok(res, result);
        } catch (error: any) {
            return responseUtils.error(res, error?.message);
        }
    },
};
export default authController;
