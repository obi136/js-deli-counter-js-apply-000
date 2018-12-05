var katzDeliLine = [];
var counter = 0;

function takeANumber(katzDeliLine) {
  counter++
  katzDeliLine.push(counter)
  return(`Welcome you are number ${counter}.`)
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))

function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
  // for (var i = 0; i < katzDeliLine.length; i++){
  //   if(katzDeliLine.length === 0)
  //   {
  //     return "There is nobody waiting to be served!";
  //   }
  //  else {
    return(`Currently serving ${katzDeliLine.shift()}.`);
  //  }
}


function currentLine(katzDeliLine){
  var line = []
  if(!katzDeliLine.length){
    return "The line is currently empty."
  }

  // var line = [];
  for (var i = 0; i < katzDeliLine.length; i++){
    line.push(` `+ (i+1) +`. ` + katzDeliLine[i]);

  }
  return (`The line is currently:` + line);
}

console.log(currentLine(["Obi", "Jess", "Andrew"]))
console.log(currentLine(["Steven", "Alex", "Vanessa"]))
