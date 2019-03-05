const createFunction = (f) =>  f

const ifFalse = (condition, func) => {
  if (!condition) func()
}

const forEachBreak = (array, func) => {
  for (let item of array){
    if (func(item)) return
  }
}

const addthirtyNine = (number, func) => {
  func(number + 39)
}

const executeFunction = (func, params) => {
  func(params)
}

const executeFunctionAsync = (func, params) => {
  setTimeout(func, params)
}

const tryCatch = (tryFunc, catchFunc) => {
  try {
    tryFunc()
  } catch (e) {
    catchFunc(e)
  }
}

const assigneValue = (v) => v

export default { 
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

