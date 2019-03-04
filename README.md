# Modez

## Indispensable library inspired by Lodash

```javascript
const modez = require("modez")
```

## createFunction

Simpler way to create a function

```javascript
const myFunction = modez.createFunction((params) => {console.log(params)})
myFunction("hello")
```

## ifFalse

"if condition" except execute callback only if condition if false 

```javascript
const condition = false 
modez.ifFalse(condition, () => {
    console.log("condition is false")
})
```

## forEachBreak

forEach function is great compared by a "for in/of loop" for no actual reason but with those advanced solution you can use break and continue operators.

```javascript
modez.forEachBreak(array, (item) => console.log(item), (item) => /*true here == break*/ )
```

## forEachContinue

```javascript
modez.forEachContinue(array, (item) => console.log(item), (item) => /*true here == continue*/ )
```

## addthirtyNine

More simply way to add 39 to a number.

```javascript
const result = modez.addthirtyNine(20) // result == 59
```

## executeFunction

Simpler solution to execute a given function 

```javascript
modez.executeFunction(() => {
    console.log("executed !")
})
```

## executeFunctionAsync

Simpler solution to execute a given function asynchronously

```javascript
modez.executeFunctionAsync(() => {
    console.log("executed second !")
})
console.log("executed first !")
```

## tryCatch

Since forEach replace a native for loop and is so popular, why not replace the try catch operator for a simpler solution ? 

```javascript
modez.tryCatch(() => {/* try */}, (error) => {/* error */})
```

