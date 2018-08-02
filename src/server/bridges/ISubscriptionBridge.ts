import { ISubscription } from '@rocket.chat/apps-ts-definition';

export interface ISubscriptionBridge {
    getByRoomId(roomId: string, appId: string): Promise<IterableIterator<ISubscription>>;
}
