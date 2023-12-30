function constantSpaceExample2(arr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(constantSpaceExample2([1, 2, 3, 4]));
