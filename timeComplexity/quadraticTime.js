function quadraticTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i]+","+arr[j]);
        }
    }
}

quadraticTimeExample([1,2,3])