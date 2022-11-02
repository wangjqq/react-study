// useState
// 1.导入useState函数 react
// 2.执行这个函数并且传入初始值 必须在函数组件中
// 3.[数据,修改数据的方法]
// 4.使用数据 修改数据 

// 第一个参数就是数据状态 第二个参数就是修改数据的方法
// 修改数据的方法传进去一个新值
// 这是一对 是绑在一起的  只能set对应的值

// 组件的更新
// 当调用setCount的时候 更新过程

// 1.首次渲染
// 首次被渲染的时候 组件内部的代码会被执行一次
// 其中useState也会跟着执行 这里重点注意 初始值只在首次渲染时生效

// 2.更新渲染 setCount都会更新
// 1.app组件再次渲染 这个函数会再次执行
// 2.useState再次执行 得到的新的count值不是0而是修改之后的1 模板会用新值渲染

// useState初始值只在每次渲染生效 后续只要调用setCount整个app中代码都会执行
// 此时的count每次拿到的都是最新值
import { useState } from "react"

function App () {

  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      <button onClick={() => setCount(1)}>{count}</button>
    </div>
  )
}

export default App