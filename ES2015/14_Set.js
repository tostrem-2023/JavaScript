let primes = new Set ( [2, 3, 5, 7, 11, 13] );
console.log(primes.size); // returns number of items in set

primes.add(17);
console.log(primes); // returns original set and adds 17 to the end

primes.add(7);
console.log(primes); // does not add another 7 because this value already exists

primes.delete(5);
console.log(primes); // removes the "5" value from the set

console.log(primes.has(8)); // returns "false" because value (8) is not in the existing set
