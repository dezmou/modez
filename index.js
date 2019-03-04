const ifFalse = (condition, func) => {
  if (!condition) func()
}

const forEachBreak = (array, func, funcBreak) => {
  for (let item in array) {
    if (funcBreak(array[item])) {
      return
    }
    func(item)
  }
}

const forEachContinue = (array, func, funcContinue) => {
  for (let item in array) {
    if (ifFalse(funcContinue(array[item]))) {
      func(item)
    }
  }
}

const addthirtyNine = (number) => {
  return number + 39
}

const executeFunction = (func) => {
  func()
}

const executeFunctionAsync = (func) => {
  setTimeout(func, 0)
}

const tryCatch = (tryFunc, catchFunc) => {
  try {
    tryFunc()
  } catch (e) {
    catchFunc()
  }
}

export default { ifFalse, forEachBreak, forEachContinue, addthirtyNine, executeFunction, executeFunctionAsync, tryCatch }