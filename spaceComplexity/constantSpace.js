function constantSpaceExample(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  console.log(constantSpaceExample2([1, 2, 3, 4]));