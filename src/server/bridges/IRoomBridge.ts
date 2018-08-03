import { IRoom } from '@rocket.chat/apps-ts-definition';
import { IUser } from '@rocket.chat/apps-ts-definition';

export interface IRoomBridge {
    create(room: IRoom, appId: string): Promise<string>;
    getById(roomId: string, appId: string): Promise<IRoom>;
    getByName(roomName: string, appId: string): Promise<IRoom>;
    getCreatorById(roomId: string, appId: string): Promise<IUser>;
    getDirectByUsernames(usernames: Array<string>, appId: string): Promise<IRoom>;
    getCreatorByName(roomName: string, appId: string): Promise<IUser>;
    update(room: IRoom, appId: string): Promise<void>;
}
