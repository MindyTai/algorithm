const insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i ++){
    currentVal = arr[i]
    let j = i
    while (j > 0 && arr[j-1] > arr[j]) {
      let tmp = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = tmp
      -- j
    }
  }
  console.log(arr);
  return arr
}

insertionSort([2,1,9,76,1])