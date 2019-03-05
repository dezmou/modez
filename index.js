const assigneValue = (v) => v

const createFunction = (f) =>  assigneValue(f)

const ifFalse = createFunction((condition, func) => {
  assigneValue(condition ? null : executeFunction(func))
})

const forEachBreak = createFunction((array, func) => {
  const iterate = createFunction((index) => {
    ifFalse(!(index < array.length), () => {
      ifFalse(executeFunction(func,array[index]), () => {
        executeFunction(iterate,index + 1)
      })
    })
  })
  executeFunction(iterate, 0)
})

const addThirtyNine = createFunction((number, func) => {
  executeFunction(func, assigneValue(number + 39))
})

const executeFunction = createFunction((func, params) => {
  return func(params)
})

const executeFunctionAsync = createFunction(async (func, params) => {
  return executeFunction(func(params))
})

const tryCatch = safeExecute((tryFunc, catchFunc, parameters) => {
  try {
    executeFunction(tryFunc, parameters)
  } catch (e) {
    executeFunction(catchFunc, e)
  }
})

// const cchien = [1,2,3,4,5,6,7,8,9]
// forEachBreak(cchien, (item) => {
//   console.log(item)
//   return false
// })

// export { 
//   ifFalse, 
//   forEachBreak, 
//   forEachContinue, 
//   addthirtyNine, 
//   executeFunction, 
//   executeFunctionAsync, 
//   tryCatch, 
//   assigneValue, 
//   createFunction
// }

