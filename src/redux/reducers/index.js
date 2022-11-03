// combineReducers 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数
import { combineReducers } from 'redux'
// reducer 必须是纯函数 纯函数每一次调用时传入同样的参数，返回的都是同样的结果
import CountReducer from './count'
import PersonReducer from './person';

const AllReducer = combineReducers({
  count: CountReducer,
  person: PersonReducer
});
export default AllReducer