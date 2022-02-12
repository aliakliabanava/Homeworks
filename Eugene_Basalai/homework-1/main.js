
const regexp = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}((?<=[a-z\d])(\.|-)(?=[a-z\d]))?[a-z\d]{1,10}.com$/img;
/********************************************************************************************************************/

function isPhoneNumber(str) {

    return /^(\+(?=375))?(375-?|8-?0)(25|29|33|44|17)-?[1-9]\d{2}(-?\d{2}){2}$/.test(str);
}

console.log(isPhoneNumber('+375-25-777-77-77'));
console.log(isPhoneNumber('375299999999'));
console.log(isPhoneNumber('8-044-444-44-44'));
console.log(isPhoneNumber('8033-6666666'));
/********************************************************************************************************************/

function getAmountVowels1(str) {

    return str.split(/[aeiou]/i).length - 1;
}

console.log(getAmountVowels1('tttfatttAtteuIOtttt7tt'));
console.log(getAmountVowels1(''));
console.log(getAmountVowels1('AEUI'));
console.log(getAmountVowels1('kjsgh fg'));

function getAmountVowels2(str) {
    let amount = 0;

    for(const vowel of str) {
        /[aeiou]/i.test(vowel) && amount++;
    }

    return amount;
}

console.log(getAmountVowels2('tttfatttAtteuIOtttt7tt'));
console.log(getAmountVowels2(''));
console.log(getAmountVowels2('AEUI'));
console.log(getAmountVowels2('kjsgh fg'));

function getAmountVowels3(str) {

    return str.replace(/[^aeiou]/ig, '').length;
}

console.log(getAmountVowels3('tttfatttAtteuIOtttt7tt'));
console.log(getAmountVowels3(''));
console.log(getAmountVowels3('AEUI'));
console.log(getAmountVowels3('kjsgh fg'));

function getAmountVowels4(str) {

    const result = str.match(/[aeiou]/ig);

    return result ? result.length : 0;
}

console.log(getAmountVowels4('tttfatttAtteuIOtttt7tt'));
console.log(getAmountVowels4(''));
console.log(getAmountVowels4('AEUI'));
console.log(getAmountVowels4('kjsgh fg'));
/********************************************************************************************************************/





