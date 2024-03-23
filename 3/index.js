function fizzBuzz() {
  let value = 1n;

  return {
    next: () => {
      const isThree = value % 3n === 0n;
      const isFive = value % 5n === 0n;
      
      if (isThree && isFive) {
        console.log("Fizz Buzz");
      } else if (isThree) {
        console.log("Fizz");
      } else if (isFive) {
        console.log("Buzz");
      } else {
        console.log(value);
      }

      value += 1n;
      return;
    },
  };
}

const fizz = fizzBuzz();

fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
fizz.next();
