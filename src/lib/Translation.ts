export class Translation {
    public locale: string;

    constructor(locale: string = 'en_US') {
        this.locale = locale;
        //@ts-ignore
        if (!global.translationData[this.locale]) throw new Error(`Locale "${this.locale}" does not exist!`);
    }

    public get(key: string, data: Array<any>): string {
        if (!key) throw new Error('No translation key provided!');
        //@ts-ignore
        if (!global.translationData[this.locale][key]) throw new Error(`Key "${key}" does not exist!`)
        //@ts-ignore
        return this.parse(global.translationData[this.locale][key], data);
    }

    public parse(text: string, data: Array<any>): string {
        const indexes = text.match(/{\d+}/gi) ? text.match(/{\d+}/gi).map(i => parseInt(i.slice(1, -1))) : [];
        indexes.forEach(c => text = text.replace(`{${c}}`, data[c]));
        return text;
    }
}