// React:框架的核心包
// ReactDOM:专门做渲染相关的包
import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css'
// 引入根组件
import App from './App'

import Context from "./context"

// 如果Context要传递的数据 只需要在整个应用初始化的时候传递一次
// 就可以选择在当前文件里做数据提供

// 如果Context需要传递数据并且将来还需要在对数据做修改 底层组件也需要跟着一起变 就要写道app.js

const root = ReactDOM.createRoot(document.getElementById('root'))
// 渲染根组件APP 到id为root的dom节点
root.render(
  // 严格模式节点需要去掉
  // 影响useEffect的执行时机
  // <React.StrictMode>
  <Context.Provider value={100}>
    <App />
  </Context.Provider>
  // </React.StrictMode>
);

