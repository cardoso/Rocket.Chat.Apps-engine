import { IRoomSubscriptionRead } from '@rocket.chat/apps-ts-definition';
import { IRoomSubscription } from '@rocket.chat/apps-ts-definition';

import { IRoomSubscriptionBridge } from '../bridges';

export class RoomSubscriptionRead implements IRoomSubscriptionRead {
    constructor(private roomSubscriptionBridge: IRoomSubscriptionBridge, private appId: string) { }

    public getByRoomId(roomId: string): Promise<IterableIterator<IRoomSubscription>> {
        return this.roomSubscriptionBridge.getByRoomId(roomId, this.appId);
    }

}
