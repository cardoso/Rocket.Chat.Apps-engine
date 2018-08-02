import { IMessageBridge } from '../bridges/IMessageBridge';

import { IMessageRead } from '@rocket.chat/apps-ts-definition';
import { IMessage } from '@rocket.chat/apps-ts-definition';
import { IRoom } from '@rocket.chat/apps-ts-definition';
import { IUser } from '@rocket.chat/apps-ts-definition';

export class MessageRead implements IMessageRead {
    constructor(private messageBridge: IMessageBridge, private appId: string) { }

    public getById(id: string): Promise<IMessage> {
        return this.messageBridge.getById(id, this.appId);
    }

    public async getSenderUser(messageId: string): Promise<IUser> {
        const msg = await this.messageBridge.getById(messageId, this.appId);

        if (!msg) {
            return undefined;
        }

        return msg.sender;
    }

    public async getRoom(messageId: string): Promise<IRoom> {
        const msg = await this.messageBridge.getById(messageId, this.appId);

        if (!msg) {
            return undefined;
        }

        return msg.room;
    }
}
