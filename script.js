const arr = [1, 2, 3, 4, 1,0,2, 2];

const divide = (arr, n) => {
  // Write your code here
	
	let result = [];
    let currentSubarray = [];
    let currentSum = 0;
	

    for (let num = 0 ; num < arr.length ; num++) {
        if (currentSum + arr[num] < n) {
            currentSubarray.push( arr[num]);
            currentSum += arr[num];
        } 
		else if(currentSum +  arr[num] == n) {
			currentSubarray.push(arr[num]);
			currentSum += arr[num];
			num++;
		}
		else {
            result.push(currentSubarray);
            currentSubarray = [arr[num]];
            currentSum = arr[num];
        }
    }

    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

