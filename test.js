console.log('sanity check!');
//1) sum
function sum(num1,num2) {
  return num1 + num2;
}

//2) isEqual
function isEqual(arg1,arg2){
  if (arg1 === arg2) {
    return true;
  }
  else{
    return false;
  }

}

//3) discount percent
function discountPercentage(amount, percent){
var decimal = percent / 100;
var total = amount * decimal;

if(total > 100){
  console.log("warning");
}
else if(percent < 0){
  console.log("warning");
}
else {
  return total;
  }

}

//4) string capitalize
function stringCapitalize(str){
  var array = str.split(" ");
  var capArray = [];
for (var i = 0; i < array.length; i++) {
  var word = array[i];
  var capWord = word.charAt(0).toUpperCase() + word.slice(1);
  capArray.push(capWord);
}
  var capString = capArray.join(" ");
  return capString;
}

//5) even numbers
function evenNumbers(num){

for (var i = 0; i <= num; i++) {
  if (i%2 === 0) {
    console.log(i);
  }
}

}

//6) isDivisible

function isDivisible(num1, num2) {
if (num1%num2 === 0) {
  return true;
}
else {
  return false;
}

}

//7) oddNumbers
function oddNumbers(num){
if (num > 40) {
  for (var i = 40; i < num; i++) {
    if (i%2 !== 0) {
      console.log(i);
    }
  }
}

if (num < 40) {
  for (var i = 0; i <= 40; i++) {
    if (i%2 !== 0) {
      console.log(i);
    }
  }
}

}

console.log(sum(1,1));
console.log(isEqual(1,1));
console.log(discountPercentage(100,10));
console.log(stringCapitalize("this Sentence should be capital Letters"));
console.log(evenNumbers(50));
console.log(isDivisible(4,2));
console.log(oddNumbers(86));
