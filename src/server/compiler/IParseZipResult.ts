import { IAppInfo } from '@rocket.chat/apps-ts-definition';
import { AppImplements } from './AppImplements';
import { ICompilerError } from './ICompilerError';

export interface IParseZipResult {
    info: IAppInfo;
    compiledFiles: { [key: string]: string };
    languageContent: { [key: string]: object };
    implemented: AppImplements;
    compilerErrors: Array<ICompilerError>;
}
