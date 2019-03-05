const assigneValue = (v) => v

const createFunction = (f) =>  assigneValue(f)

const ifFalse = createFunction((condition, func) => {
  if (!condition) func()
})

const forEachBreak = createFunction((array, func) => {
  let isBreaked = false
  for (let i in array){
    ifFalse(!func(array[i]), () => {
      isBreaked = true
    })
    if (isBreaked) return
  }
})

const addthirtyNine = createFunction((number, func) => {
  func(assigneValue(number + 39))
})

const executeFunction = createFunction((func, params) => {
  return func(params)
})

const executeFunctionAsync = createFunction(async (func, params) => {
  func(params)
})

const tryCatch = createFunction((tryFunc, catchFunc, parameters) => {
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
  addthirtyNine, 
  executeFunction, 
  executeFunctionAsync, 
  tryCatch, 
  assigneValue, 
  createFunction
}

