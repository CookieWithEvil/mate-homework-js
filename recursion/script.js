//1^
function range(start, end) {
	if(start == end-2) return end-1;
	return [start+1].concat(range(start+1, end));
}
console.log("range: "+range(2, 9));
//2^
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

console.log("merged arr: "+mergeSort([34,7,23,32,5,62] ));

//3^
function gcd(num1, num2, g){
	if(Math.max(num1, num2) % Math.min(num1, num2) === 0) return Math.min(num1, num2);
	else if(g == Math.min(num1, num2)) return 1;
	else if(num1%g == 0 && num2%g == 0) return g*gcd(num1/g, num2/g, g);
	else return gcd(num1, num2, g+1);
}
console.log("gcd: "+gcd(15, 24, 2));//6

//4^
function fib(n){
	if(n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
}

console.log("fib: "+fib(3));

//5^
function exponent(x, n){
	if(n == 1) return x;
	return x*exponent(x, n-1);
}
console.log("exponent: "+exponent(2, 8));