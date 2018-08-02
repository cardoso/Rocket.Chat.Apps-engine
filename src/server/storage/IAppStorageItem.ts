import { AppStatus } from '@rocket.chat/apps-ts-definition';
import { IAppInfo } from '@rocket.chat/apps-ts-definition';
import { ISetting } from '@rocket.chat/apps-ts-definition';

export interface IAppStorageItem {
    _id?: string;
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    status: AppStatus;
    info: IAppInfo;
    zip: string;
    compiled: { [s: string]: string };
    languageContent: { [key: string]: object };
    settings: { [id: string]: ISetting };
    implemented: { [int: string]: boolean };
}
