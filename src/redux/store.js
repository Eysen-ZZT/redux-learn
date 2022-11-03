// createStore 创建 store 实例，applyMiddleware 用于扩展 redux 的方式
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// 引入所有的 reducer
import AllReducer from './reducers/index';
// redux 的异步处理方案
import thunk from 'redux-thunk';
// 用于开启浏览器的 redux 开发工具
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(AllReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store