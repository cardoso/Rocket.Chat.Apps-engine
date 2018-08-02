import { ILogger } from '@rocket.chat/apps-ts-definition';
import { App } from '@rocket.chat/apps-ts-definition';
import { AppStatus } from '@rocket.chat/apps-ts-definition';
import { AppMethod, IAppInfo } from '@rocket.chat/apps-ts-definition';
import { AppConsole } from '../logging';

export class DisabledApp extends App {
    public static createNew(info: IAppInfo, status: AppStatus): DisabledApp {
        return new DisabledApp(info, new AppConsole(AppMethod._CONSTRUCTOR), status);
    }

    constructor(info: IAppInfo, logger: ILogger, status: AppStatus) {
        super(info, logger);
        this.setStatus(status);
    }

    public async onEnable(): Promise<boolean> {
        return false;
    }

    public getLogger(): AppConsole {
        return super.getLogger() as AppConsole;
    }
}
