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


//Leetcode: Max Chunks To Make Sorted
var maxChunks = function(arr) {
  let seperatedArrayCount = 0;
  let maxValue = 0;

  for(let i = 0; i < arr.length; i ++){
      maxValue = Math.max(maxValue, arr[i])
      if(i >= maxValue) {
          ++ seperatedArrayCount
      }
  }
  console.log(seperatedArrayCount);
  return seperatedArrayCount
};

maxChunks([4,3,2,1,0]) //1
maxChunks([1,0,2,3,4]) //4