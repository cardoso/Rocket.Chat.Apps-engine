import { IUser } from '@rocket.chat/apps-ts-definition';

export interface IUserBridge {
    getById(id: string, appId: string): Promise<IUser>;

    getByUsername(username: string, appId: string): Promise<IUser>;
}
