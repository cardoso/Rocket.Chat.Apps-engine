import { ISetting } from 'temporary-rocketlets-ts-definition/settings';
import { RocketletMethod } from '../compiler';
import { RocketletManager } from '../RocketletManager';

export class RocketletSettingsManager {
    constructor(private manager: RocketletManager) { }

    public getRocketletSettings(rocketletId: string): { [key: string]: ISetting } {
        const rl = this.manager.getOneById(rocketletId);

        if (!rl) {
            throw new Error('No Rocketlet found by the provided id.');
        }

        return Object.assign({}, rl.getStorageItem().settings);
    }

    public getRocketletSetting(rocketletId: string, settingId: string): ISetting {
        const settings = this.getRocketletSettings(rocketletId);

        if (!settings[settingId]) {
            throw new Error('No setting found for the Rocketlet by the provided id.');
        }

        return Object.assign({}, settings[settingId]);
    }

    public async updateRocketletSetting(rocketletId: string, setting: ISetting): Promise<void> {
        const rl = this.manager.getOneById(rocketletId);

        if (!rl) {
            throw new Error('No Rocketlet found by the provided id.');
        }

        if (!rl.getStorageItem().settings[setting.id]) {
            throw new Error('No setting found for the Rocketlet by the provided id.');
        }

        setting.updatedAt = new Date();
        rl.getStorageItem().settings[setting.id] = setting;

        const item = await this.manager.getStorage().update(rl.getStorageItem());

        rl.setStorageItem(item);

        const configModify = this.manager.getAccessorManager().getConfigurationModify(rl.getID());
        const reader = this.manager.getAccessorManager().getReader(rl.getID());
        const http = this.manager.getAccessorManager().getHttp(rl.getID());

        rl.call(RocketletMethod.ONSETTINGUPDATED, setting, configModify, reader, http);
    }
}
