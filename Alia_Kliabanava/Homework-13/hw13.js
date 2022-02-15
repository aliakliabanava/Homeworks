// task 1
var regExp = /^[a-z]{3,10}_[a-z]{3,10}(\-[0-9]{4})?@[a-z0-9]{1,19}(\.?|\-?)[a-z0-9]{1,19}.com$/
regExp.test("alia_kliabana-1234@gm-ail.com")


// task 2
function phoneMatch(phone) {
    return /^\+?(375|8\-?0)\-?(17|25|29|33|44)\-?[1-9]{1}[0-9]{2}\-?[0-9]{2}\-?[0-9]{2}$/.test(phone)
}

phoneMatch("+375-25-777-77-77")
// phoneMatch("375299999999")
// phoneMatch("8-044-444-44-44")
// phoneMatch("8033-6666666")

// task 3.1
function vowelTest(str) {
    var n = 0; // первоначально количество гласных
    for (i = 0; i < str.length; i++) {
        if (/[aeiouy]/.test(str[i])) { n++ }
    }
    return n;
}

// task 3.2
function vowelMatcher(str) {
    var n = 0; // первоначально количество гласных
    for (i = 0; i < str.length; i++) {
        if (str[i].match(/[aeiouy]/ig)) { n++ }
    }
    return n;
}

vowelTest("My text is super");
vowelMatcher("My text is super");