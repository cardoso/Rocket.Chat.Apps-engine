import { ISubscription } from '@rocket.chat/apps-ts-definition';

import { ISubscriptionBridge } from '../../../src/server/bridges';

export class TestsSubscriptionBridge implements ISubscriptionBridge {
    public getByRoomId(roomId: string, appId: string): Promise<IterableIterator<ISubscription>> {
        throw new Error('Method not implemented.');
    }
}
