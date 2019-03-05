# Modez

## Indispensable library inspired by Lodash, give your the possibility to write code simpler and more functional.

```javascript
const modez = require("modez")
```


## forEachBreak

forEach function but if callback return true then break

```javascript
modez.forEachBreak(array, item => {
    if (item === "chien"){
        return true //end of forEach
    }
})
```

## createFunction

Simpler way to create a function

```javascript
const myFunction = modez.createFunction((params) => {console.log(params)})
myFunction("hello")
```

## addthirtyNine

Simpler way to add 39 to a number.

```javascript
let nbr = 20
modez.addthirtyNine(nbr, (result) => {
    console.log(result) // result == 59
}) 
```

## ifFalse

Check if the condition is false so execute the callback

```javascript
const condition = false 
modez.ifFalse(condition, () => {
    console.log("condition is false")
})
```
## forOne

Iterate through a given array like forEach, but only first element.

```javascript
myArray = [1,2,3]
modez.forOne(myArray, (item) => {
    console.log(item) // only 1 will be printed
})
```

## executeFunction

Simpler solution to execute a given function 

```javascript
const myFunction = (foo) => {
    console.log(`Welcome ${foo} !`) //welcome chien !
}
modez.executeFunction(myFunction, "chien")
```

## executeFunctionAsync

Simpler solution to execute a given function asynchronously

```javascript
const myFunction = (foo) => {
    console.log(`Welcome ${foo} !`) //welcome chien !
}
modez.executeFunction(myFunction, "chien")
console.log("I am first") // first log to be printed
```

## safeExecute

Execute the first function given, if it fail, catch the error in the seconde function

```javascript
modez.safeExecute(() => {/* try */}, (error) => {/* error */})
```

