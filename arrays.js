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
 return [...array,element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  console.log(addElementToEndOfArray)
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
 return array[index] 
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}
  
function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
  }

