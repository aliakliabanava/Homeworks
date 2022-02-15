// Task 1
console.log(/^[a-z]{3,10}_[a-z]{3,10}(-[0-9]{4})?@[a-z0-9]{1,19}(\-?|\.?)[a-z0-9]{1,19}.com$/i.test('aliaksei_skakun-1011@g-mail.com'));

// Task 2
str = '+375-25-777-77-77';

function phoneValidate(str) {
    return /^\+?(375|8(\-?)0)[\-]?(25|29|33|44|17)\-?[1-9]{3}\-?[0-9]{2}\-?[0-9]{2}$/i.test(str)
}

phoneValidate(str);

// Task 3
var inputText = 'Lorem ipsum dolor sit';

function countVowels(inputStr) {
    var count = 0;

    for (var i = 0; i < inputStr.length; i++) {
        if (/^[a|e|i|o|u]$/i.test(inputStr[i]))
            count++;
    }

    return count;
}

console.log(countVowels(inputText)); // 7