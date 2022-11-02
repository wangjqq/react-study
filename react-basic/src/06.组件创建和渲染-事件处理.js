import React from "react"
// 函数组件的创建和渲染
// 创建
// 如何传递自定义参数？
// 1.只需要一个额外参数 {clickHandler} --> {()=>clickHandler('自定义的参数')} 
// 2.既需要e也需要额外的参数 {(e)=>clickHandler(e,'自定义的参数')}
function Hello () {
  const clickHandler = (e, msg) => {
    console.log(e, '函数组件中的事件被触发了', msg)
  }
  return <div onClick={(e) => clickHandler(e, 'this is msg')}>click me </div>
}

// 渲染<Hello/>  <Hello></Hello>

// 类组件的创建和渲染

// 创建
class HelloComponent extends React.Component {
  // 事件回调函数（标准写法 避免this指向问题）
  // 这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render () {
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}
// 渲染 <HelloComponent/>  <HelloComponent></HelloComponent>


function App () {
  return (
    <div className="App">
      <Hello></Hello>
      <HelloComponent></HelloComponent>
    </div>
  )
}

export default App
