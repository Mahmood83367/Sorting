let numbers = [5, 8, 0, 1, 9, 11, 15, 16]

console.log('Original numbers list: ', numbers)

for (var i = 0; i < numbers.length; i++) {
  var temp = numbers[i]
  for (var j = i - 1; j >= 0 && numbers[j] > temp; j--) {
    numbers[j + 1] = numbers[j]
  }
  numbers[j + 1] = temp
}

console.log('numbers list After sorting: ', numbers)

for (var i = 0; i < numbers.length; i++) {
  var temp = numbers[i]
  for (var j = i - 1; j >= 0 && numbers[j] < temp; j--) {
    numbers[j + 1] = numbers[j]
  }
  numbers[j + 1] = temp
}

console.log('numbers list After Desc sorting: ', numbers)
