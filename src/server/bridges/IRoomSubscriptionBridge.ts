import { IRoomSubscription } from '@rocket.chat/apps-ts-definition';

export interface IRoomSubscriptionBridge {
    getByRoomId(roomId: string, appId: string): Promise<IterableIterator<IRoomSubscription>>;
}
