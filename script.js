function positiveSum(arr) {
    return arr.reduce((a, v) => v > 0 ? a + v : a, 0)
}


console.log(positiveSum([1, 2, 3, -5]))