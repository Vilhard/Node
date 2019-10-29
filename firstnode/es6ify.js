hello = () => {
    console.log('Hello, World!');
}

sayHi = (name) => {
    console.log('Hi ' + name + '!');
}

multiplyByTen = (a) => {
    return a * 10;
}

sum = (a,b) => {
    return a + b;
}

power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    result *= base;
    }
    return result;
   }; 