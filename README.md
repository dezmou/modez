# Modez

## Indispensable library inspired by Lodash



```javascript
const modez = require("modez")
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
const result = modez.AddthirtyNine(20) // result == 59
```

## executeFunction

Execute a given function 

```javascript
modez.executeFunction(() => {
    console.log("executed !")
})
```

## assert

Basic testing function, always returns true : for testing coverage lovers

```javascript
modez.assert(() => {
    console.log("some test code !")
}) // true
```
