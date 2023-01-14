//@ts-nocheck

/**
 * Log function works only in development and removed in production
 * @param args
 */
export const log = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(...args)
  }
}


/** Method to Filter the Empty params before send the API Request.
 *
 * @param data
 * @returns {{}}
 */
export const filterData = (data) => {
  let newData = {}
  Object.keys(data).forEach((key => {
    const isString = typeof data[key] === 'string' && data[key].length
    const isArray = Array.isArray(data[key]) && data[key].length
    const isNumber = Number.isInteger(data[key])
    const isBoolean = typeof data[key] === 'boolean' && data[key] === !!data[key]
    const isObject = data[key] instanceof Object && Object.keys(data[key]).length
    if (isString || isArray || isNumber || isBoolean) {
      newData[key] = data[key]
    }
    if (!!isObject) {
      let objectData = filterData(data[key])
      if (!!objectData && !!Object.keys(objectData).length) {
        newData[key] = objectData
      }
    }
  }))
  return newData

}

