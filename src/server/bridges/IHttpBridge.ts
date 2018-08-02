import { IHttpRequest, IHttpResponse, RequestMethod } from '@rocket.chat/apps-ts-definition';

export interface IHttpBridge {
    call(info: IHttpBridgeRequestInfo): Promise<IHttpResponse>;
}

export interface IHttpBridgeRequestInfo {
    appId: string;
    method: RequestMethod;
    url: string;
    request: IHttpRequest;
}
