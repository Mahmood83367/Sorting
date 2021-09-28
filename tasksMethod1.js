let numbers = [5, 8, 0, 1, 9, 11, 15, 16]

console.log('Original numbers list: ', numbers)

numbers.sort(function (a, b) {
  return a - b
})

console.log('numbers list After sorting: ', numbers)

numbers.sort(function (a, b) {
  return b - a
})

console.log('numbers list After Desc sorting: ', numbers)
