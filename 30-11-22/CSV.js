// CSV representation of array

var array = [
  [ 0, 1, 2, 3, 4 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]
]

function returnsCsv(arr) {
  return arr.join('\n')
}

console.log(returnsCsv(array))
