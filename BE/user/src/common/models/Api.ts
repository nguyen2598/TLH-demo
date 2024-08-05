// import { Observable } from 'rxjs/Observable';
import { Response as ExpressResponse, Request as ExpressRequest } from 'express';
export interface IResponse {
    success: boolean;
    message?: string;
    status: number;
    data?: any;
}
export type Response = ExpressResponse<IResponse>;
export type Request = ExpressRequest;
