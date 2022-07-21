var text = ["Each day, 25,000 people die from hunger", 
  "more than 10,000 children, die from hunger and related causes", 
  "Some 854 million people worldwide are estimated to be undernourished",
  "high food prices may drive another 100 million into poverty and hunger"];
var counter = 0;
var elem = document.getElementById("changtxt");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}