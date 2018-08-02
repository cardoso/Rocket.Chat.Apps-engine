import { AppStatus } from '@rocket.chat/apps-ts-definition';
import { ProxiedApp } from '../ProxiedApp';

export interface IAppActivationBridge {
    appAdded(app: ProxiedApp): Promise<void>;
    appUpdated(app: ProxiedApp): Promise<void>;
    appRemoved(app: ProxiedApp): Promise<void>;
    appStatusChanged(app: ProxiedApp, status: AppStatus): Promise<void>;
}
