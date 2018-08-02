import { IMessage } from '@rocket.chat/apps-ts-definition';
import { IRoom } from '@rocket.chat/apps-ts-definition';
import { IUser } from '@rocket.chat/apps-ts-definition';

export interface IMessageBridge {
    create(message: IMessage, appId: string): Promise<string>;
    getById(messageId: string, appId: string): Promise<IMessage>;
    update(message: IMessage, appId: string): Promise<void>;
    notifyUser(user: IUser, message: IMessage, appId: string): Promise<void>;
    notifyRoom(room: IRoom, message: IMessage, appId: string): Promise<void>;
}
