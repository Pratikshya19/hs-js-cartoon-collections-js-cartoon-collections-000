function dwarfRollCall(dwarves)  { 
  var temp = "";   
  for (var i=1; i <= dwarves.length; i++){  
   temp = temp+i+". "+ dwarves[i-1]+" " ;
    
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
  var check =  false;
  for(var i=0; i<words.length; i++) {
    if(words[i].length>4){
      check = true;
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
      
  }
  return "no cheese!";
  
}