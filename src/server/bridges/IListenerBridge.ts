import { AppInterface } from '../compiler';

import { IMessage } from '@rocket.chat/apps-ts-definition';
import { IRoom } from '@rocket.chat/apps-ts-definition';

export interface IListenerBridge {
    messageEvent(int: AppInterface, message: IMessage): Promise<void | boolean | IMessage>;
    roomEvent(int: AppInterface, room: IRoom): Promise<void | boolean | IRoom>;
}
