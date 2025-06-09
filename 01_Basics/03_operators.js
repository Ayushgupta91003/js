// ===== Arithmetic Operators =====
let a = 10, b = 3;
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1
console.log("Exponentiation:", a ** b);// 1000


// ===== Assignment Operators =====
let x = 5;
x += 2;  // x = 7
x *= 3;  // x = 21
x -= 1;  // x = 20
x /= 2;  // x = 10
x %= 3;  // x = 1
console.log("Final value of x:", x);

// ===== Comparison Operators =====
console.log("5 == '5':", 5 == '5');     // true
console.log("5 === '5':", 5 === '5');   // false
console.log("5 != 6:", 5 != 6);         // true
console.log("5 !== '5':", 5 !== '5');   // true
console.log("5 > 3:", 5 > 3);           // true
console.log("5 <= 5:", 5 <= 5);         // true


// ===== Logical Operators =====
let isTrue = true;
let isFalse = false;
console.log("true && false:", isTrue && isFalse); // false
console.log("true || false:", isTrue || isFalse); // true
console.log("!true:", !isTrue);                   // false


// ===== Unary Operator =====
let value = 10;
console.log("typeof value:", typeof value); // number
