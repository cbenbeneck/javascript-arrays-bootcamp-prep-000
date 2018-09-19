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
  console.log(addElementToBeginningOfArray)
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return element
}

function destructivelyAddElementToEndOfArray (array, element) {
  console.log(addElementToEndOfArray)
  array.push(element)
  return array
}

