var findPairThatEqualSum = function (arr, sum){
	var low = 0;
	var high = arr.length - 1
	var testSum;
	for(var i = 0; i < arr.length; i++) {
		testSum = arr[low] + arr[high];
		if (testSum === sum){
			return true;
		} else if ( testSum > sum) {
			high--;
		} else {
			low++;
		}
	}
	return false;
}




console.log(findPairThatEqualSum([1,2,3,9], 8));
console.log(findPairThatEqualSum([1,2,4,4], 8));