import { IUserRead } from '@rocket.chat/apps-ts-definition';
import { IUser } from '@rocket.chat/apps-ts-definition';
import { IUserBridge } from '../bridges/IUserBridge';

export class UserRead implements IUserRead {
    constructor(private userBridge: IUserBridge, private appId: string) { }

    public getById(id: string): Promise<IUser> {
        return this.userBridge.getById(id, this.appId);
    }

    public getByUsername(username: string): Promise<IUser> {
        return this.userBridge.getByUsername(username, this.appId);
    }
}
