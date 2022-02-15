//1-ое задание
/^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@(?<![-.]{1})[0-9a-z-.]{2,20}(?=\.com)(?<=@[a-z0-9]{1,19}[-.]{0,1}[a-z0-9]{1,19})\.com$/i

//2-ое задание
function checkPhoneNum(phNumber) {
  return /^(\+?375|80)[-]?(25|29|33|44|17)[-]?(?![0]{1})\d{3}[-]?\d{2}[-]?\d{2}$/.test(str)
}

checkPhoneNum(phNumber)

//3-е задание
function countVowels(text) {
  var result = text.match(/[aeiouy]/gi);
  if (!result){
    console.log('No vowels in the string')
      }
  return result.length;
}
countVowels(text)
