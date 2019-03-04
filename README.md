# Modez 

```javascript
const modez = require("modez")
```

# Indispensable library inspired by Lodash

## ifFalse

"if condition" except execute callback only if condition if false 

```javascript
const condition = false 
modez.ifFalse(condition, () => {
    console.log("condition is false")
})
```

## mapBreak

Map function is great compared by a "for in/of loop" for no actual reason but with those advanced solution you can use break and continue operators.

```javascript
modez.mapBreak(array, (item) => item + 1, (item) => /*true here == break*/ )
```

## mapContinue

```javascript
modez.mapContinue(array, (item) => item + 1, (item) => /*true here == continue*/ )
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