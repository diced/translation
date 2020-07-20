import { TranslationHelper } from "./lib/TranslationHelper";
import { Translation } from "./lib/Translation";

TranslationHelper.load('./locales');

const translator = new Translation(/* 'en_US' */);

console.log(translator.get('menus.test', ['bruh', '1234']));