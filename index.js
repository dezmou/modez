const assigneValue = (v) => v

const createFunction = (f) =>  assigneValue(f)

const createListFromArray = (a) => assigneValue(a)

const ifFalse = createFunction((condition, func) => {
  if (condition){
    return {else :  (f) => f()}
  } else {
    executeFunction(func)
  }
  return {else : () => {}}
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
  return executeFunction(func,params)
})

const safeExecute = ((tryFunc, catchFunc, parameters) => {
  try {
    executeFunction(tryFunc, parameters)
  } catch (e) {
    executeFunction(catchFunc, e)
  }
})


export { 
  ifFalse, 
  forEachBreak, 
  forEachContinue, 
  addThirtyNine, 
  executeFunction, 
  executeFunctionAsync, 
  safeExecute, 
  assigneValue, 
  createFunction,
  createListFromArray,
}

