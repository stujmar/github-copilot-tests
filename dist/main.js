// create an array from start to end
const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// return every prime number in a range   
const primes = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

