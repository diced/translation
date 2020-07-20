import { readdirSync, readFileSync } from 'fs';
import { sep } from 'path';

export class TranslationHelper {
    public static load(dir: string = './locales') {
        const files = readdirSync(dir);
        for (const file of files) {
            const fil = dir + sep + file;
            const data = JSON.parse(readFileSync(fil, 'utf-8'));
            //@ts-ignore
            global.translationData = {}; global.translationData[file.replace('.json', '')] = data;
        }
    }
}