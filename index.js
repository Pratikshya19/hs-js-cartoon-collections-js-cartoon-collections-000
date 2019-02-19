function dwarfRollCall(dwarves)  { 
  var temp = "" 
  
  for(var i=1; i <= dwarves.length/2; i++) {
 temp = temp + i +". "+ dwarves[i-1]+" " ;
  }
  return temp;
  }

function summonCaptainPlanet(planeteerCalls) {
    var temp = [];
    for(var i = 0; i < planeteerCalls.length; i++){
      temp.push( planeteerCalls[i].toUpperCase() + "!");
  }
return temp;
}

function longPlaneteerCalls(words) {
  var check = " ";
  for(var i=0; i<words.length; i++) {
    if(words[i].length>4){
      check = true;
    }
  else {
  check = false;
  }
  }
    return check;
}

function findTheCheese (foods) {
  for(var i = 0; i<foods.length; i++){
    if (foods[i]=="cheddar"){
      return foods[i];
      }
      if (foods[i]=="gouda"){
        return foods[i];
      }
      if (foods[i]=="camembert") {
        return foods[i];
      }
      if(foods[i]=="swiss") 
      {
        return foods[i]
}
}
      
  }
  return "no cheese!";
  
}
function wordsWithB(words) {
  const temp = [];
  
  for(var i=0; i<words.length; i++) {
    var word = words[i]
  
if  (words[i].startWith("B"))
    {
    temp.push(words[i]);
   }
  }
  return temp;
}


