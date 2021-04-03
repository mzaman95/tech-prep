# JavaScript

## Maps

#### How do maps work?

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

## Object.assign()

#### How does Object.assign() work? 

The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

## Object.is()

#### How does Object.is() work?

```javascript
/*
@param value1 => The first value to compare.
@param value2 => The second value to compare.

@return boolean => A Boolean indicating whether or not the two arguments are the same value.
*/
Object.is(value1, value2);

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true
```

#### Is Object.is() the same as ==?

This is not the same as being equal according to the == operator. The == operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is doesn't coerce either value.

#### Is Object.is() the same as ===?

This is also not the same as being equal according to the === operator. The only difference between Object.is() and === is in their treatment of signed zeroes and NaNs. For example, the === operator (and the == operator) treats the number values -0 and +0 as equal. Also, the === operator treats Number.NaN and NaN as not equal.