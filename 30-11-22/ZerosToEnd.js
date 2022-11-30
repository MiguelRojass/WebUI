// Moving Zeros To The End

var array = [false, 1, 0, 1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
  let arrZeros = []
  let arrNotZeros = []

  arr.forEach(item => {
    console.log(item)
    if (item === 0) {
      arrZeros.push(item)
    } else {
      arrNotZeros.push(item)
    }
  })

  return arrNotZeros.concat(arrZeros)
}

console.log(moveZerosToEnd(array)) // Output: [false,1,1,2,1,3,"a",0,0]