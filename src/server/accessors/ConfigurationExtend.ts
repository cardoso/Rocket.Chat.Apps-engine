import {
    IConfigurationExtend,
    IHttpExtend,
    ISettingsExtend,
    ISlashCommandsExtend,
} from '@rocket.chat/apps-ts-definition';

export class ConfigurationExtend implements IConfigurationExtend {
    public readonly http: IHttpExtend;
    public readonly settings: ISettingsExtend;
    public readonly slashCommands: ISlashCommandsExtend;

    constructor(https: IHttpExtend, sets: ISettingsExtend, cmds: ISlashCommandsExtend) {
        this.http = https;
        this.settings = sets;
        this.slashCommands = cmds;
    }
}
