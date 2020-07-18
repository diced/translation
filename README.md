# translation

Simple locales helper

# Example
First you will need to create a directory to store all your locales. It is prefered that it is called "locales" but it can be whatever you would like it to be.
Here is an example locale json file (locale files should be "<language code>_<COUNTRY CODE>.json", yet the module does not check for this, it is good to use this format of "en_US" or "en_GB")
```json
{
    // en_US.json 
    "menus.help": "This is a help menu in the english language, colors are cool.",
    // or en_GB.json
    "menus.help": "This is a help menu in the english language, colours are cool.",
    // you can also have a placeholder for additional values passed into your code, {0} will be the 0 index of the array you pass in code. ['MyUsername', 400] {0} will be MyUsername in this case.
    "menus.help": "This is a help menu for {0}, you have {1} colors."
}
```

```js
const { TranslationHelper, Translation } = require('@dicedtomato/translation');

TranslationHelper.load('./locales');

const enUS = new Translation() // default en_US
// or
const enUS = new Translation('en_US');

console.log(enUS.get('menus.help'))
// or if you need to pass additional data....
console.log(enUS.get('menus.help', ['MyUsername', 400]));
```