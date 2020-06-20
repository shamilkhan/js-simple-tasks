function maxSubarray(inputArray) {
  var currentMax = 0;
  var max = 0;

  for (var i = 0; i < inputArray.length; i++) {
    currentMax = Math.max(currentMax + inputArray[i], inputArray[i]);
    max = Math.max(max, currentMax);
  }

  return max;
}
