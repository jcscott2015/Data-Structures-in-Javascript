/**
 * Use binary search pattern to find index of item in sorted array.
 * @param A number[]
 * @param value number
 * @returns number index or -1 for not found
 */
const binarySearch = (A: number[], value: number): number => {
	let low = 0;
	let high = A.length;
	while (low <= high) {
		let mid = (low + high) / 2;
		if (value == A[mid]) {
			return mid; // found it!
		} else if (value < A[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

console.info(binarySearch([2, 4, 5, 7, 13, 14, 15, 23], 13));
