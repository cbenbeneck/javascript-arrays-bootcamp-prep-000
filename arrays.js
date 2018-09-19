var chocolateBars = [ 
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) { 
  console.log(addElementToBeginningOfArray[0])
  return [element,...array]
}



