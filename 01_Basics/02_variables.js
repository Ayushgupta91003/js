// Variable declarations
var oldSchool = "I'm a var variable";     // var (function-scoped, avoid if possible)
let blockScoped = "I'm a let variable";   // let (block-scoped)
const constantValue = "I can't be reassigned"; // const (block-scoped, read-only)

// Primitive data types
let str = "Hello, World!";         // String
let num = 42;                      // Number
let bigIntVal = 1234567890123456789012345678901234567890n; // BigInt
let bool = true;                   // Boolean
let undef;                         // Undefined (variable declared but not assigned)
let nullVal = null;                // Null (intentional absence of value)
let sym = Symbol("unique");        // Symbol (unique and immutable)

// Complex data types
let obj = { name: "Alice", age: 30 };  // Object
let arr = [1, 2, 3, 4, 5];             // Array (also an object)
let func = function() {                // Function
  return "I am a function!";
};

// Output everything
console.log("var:", oldSchool);
console.log("let:", blockScoped);
console.log("const:", constantValue);
console.log("String:", str);
console.log("Number:", num);
console.log("BigInt:", bigIntVal);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nullVal);
console.log("Symbol:", sym.toString());
console.log("Object:", obj);
console.log("Array:", arr);
console.log("Function:", func());
