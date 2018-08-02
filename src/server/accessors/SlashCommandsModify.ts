import { AppSlashCommandManager } from '../managers';

import { ISlashCommandsModify } from '@rocket.chat/apps-ts-definition';
import { ISlashCommand } from '@rocket.chat/apps-ts-definition';

export class SlashCommandsModify implements ISlashCommandsModify {
    constructor(private readonly manager: AppSlashCommandManager, private readonly appId: string) { }

    public modifySlashCommand(slashCommand: ISlashCommand): Promise<void> {
        return Promise.resolve(this.manager.modifyCommand(this.appId, slashCommand));
    }

    public disableSlashCommand(command: string): Promise<void> {
        return Promise.resolve(this.manager.disableCommand(this.appId, command));
    }

    public enableSlashCommand(command: string): Promise<void> {
        return Promise.resolve(this.manager.enableCommand(this.appId, command));
    }
}
