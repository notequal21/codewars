
let zeros = (n) => {
  // let zeros = 0
  // let sum = BigInt(1)

  // // calculateds factorial
  // for (let index = 1; index <= n; index++) {
  //   sum *= BigInt(index)
  // }

  // sum = [...String(sum)].reverse()

  // for (let index = 0; index < sum.length; index++) {
  //   if (sum[index] == 0) {
  //     zeros++
  //   } else {
  //     break
  //   }
  // }

  // return zeros



  if (n < 0) //Negative Number Edge Case
    return -1;

  // Initialize result
  let count = 0;

  // Keep dividing n by powers of
  // 5 and update count
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
    console.log(Math.floor(n / i));
    console.log(count);
  }

  return count;
}

console.log(zeros(6));
console.log(zeros(12));
console.log(zeros(30));
console.log(zeros(20));
console.log(zeros(1000)); 