import { IRoomSubscription } from '@rocket.chat/apps-ts-definition';

import { IRoomSubscriptionBridge } from '../../../src/server/bridges';

export class TestsRoomSubscriptionBridge implements IRoomSubscriptionBridge {
    public getByRoomId(roomId: string, appId: string): Promise<IterableIterator<IRoomSubscription>> {
        throw new Error('Method not implemented.');
    }
}
