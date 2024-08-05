// import { Observable } from 'rxjs/Observable';
import { Response as ExpressResponse, Request as ExpressRequest } from 'express';
export interface IResponse {
    isSuccess: boolean;
    message: string;
    data?: any;
}
export type Response = ExpressResponse<IResponse>;
export type Request = ExpressRequest;
