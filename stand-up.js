// Given an array of integers, return how many integers are less than the current integer for each integer in the array (i, j)

const checker = (arr) => {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        if (arr[i] > arr[j]) {
          counter++
        }
      }
    }
    result.push(counter);
    counter = 0
  }

  console.log(result)
}

checker([8, 1, 2, 3, 4, 5]);