function fizzBuzz(n) {
   
    for (var i = 1; i <= n; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}
}

fizzBuzz(44)