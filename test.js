console.log('sanity check!');

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
console.log(discountPercentage(100,10));
