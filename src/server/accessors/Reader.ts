import {
    IEnvironmentRead,
    IMessageRead,
    INotifier,
    IPersistenceRead,
    IRead,
    IRoomRead,
    IRoomSubscriptionRead,
    IUserRead,
} from '@rocket.chat/apps-ts-definition';

export class Reader implements IRead {
    constructor(private env: IEnvironmentRead,
                private message: IMessageRead,
                private persist: IPersistenceRead,
                private room: IRoomRead,
                private roomSubscription: IRoomSubscriptionRead,
                private user: IUserRead,
                private noti: INotifier) { }

    public getEnvironmentReader(): IEnvironmentRead {
        return this.env;
    }

    public getMessageReader(): IMessageRead {
        return this.message;
    }

    public getPersistenceReader(): IPersistenceRead {
        return this.persist;
    }

    public getRoomReader(): IRoomRead {
        return this.room;
    }
    public getRoomSubscriptionReader(): IRoomSubscriptionRead {
        return this.roomSubscription;
    }

    public getUserReader(): IUserRead {
        return this.user;
    }

    public getNotifier(): INotifier {
        return this.noti;
    }
}
