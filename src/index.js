import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式，可用于react语法检查
  <React.StrictMode>
    {/* Provider: 提供器，在该组件里边的所有组件都可以使用 store，使 React 组件可被连接（connectable） */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// 用于监听store的数据变化，实现页面更新，由于使用了react-redux，其内部已经做好处理，这里就不用在写了
// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
// })