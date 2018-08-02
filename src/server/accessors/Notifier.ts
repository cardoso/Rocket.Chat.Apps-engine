import { IMessageBuilder, INotifier } from '@rocket.chat/apps-ts-definition';
import { IMessage } from '@rocket.chat/apps-ts-definition';
import { IRoom } from '@rocket.chat/apps-ts-definition';
import { IUser } from '@rocket.chat/apps-ts-definition';

import { IMessageBridge } from '../bridges';
import { MessageBuilder } from './MessageBuilder';

export class Notifier implements INotifier {
    constructor(private readonly msgBridge: IMessageBridge, private readonly appId: string) { }

    public async notifyUser(user: IUser, message: IMessage): Promise<void> {
        await this.msgBridge.notifyUser(user, message, this.appId);
    }

    public async notifyRoom(room: IRoom, message: IMessage): Promise<void> {
        await this.msgBridge.notifyRoom(room, message, this.appId);
    }

    public getMessageBuilder(): IMessageBuilder {
        return new MessageBuilder();
    }
}
