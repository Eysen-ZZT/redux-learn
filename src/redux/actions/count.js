import { INCREASE, DECREASE, MULTIPLYBY } from '../constant'

export const createIncreaseData = data => ({ type: INCREASE, data })
export const createDecreaseData = data => ({ type: DECREASE, data })
export const createMultiplyByData = data => ({ type: MULTIPLYBY, data })
export const createIncreaseAsyncData = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncreaseData(data))
    }, time)
  }
}