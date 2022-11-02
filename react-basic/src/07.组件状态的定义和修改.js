// 组件状态 类组件作为演示
import React from "react"
class TestComponent extends React.Component {
  // 1.定义组件状态
  state = {
    // 在这里可以定义各种属性 全都是当前组件的状态
    name: 'wjq'
  }
  // 事件回调函数、
  ChangeName = () => {
    // 3.修改state中的状态name
    // 注意：不可以直接做赋值修改 必须通过 setState 方法
    this.setState({
      name: 'wyy'
    })
  }
  render () {
    // 2.使用状态
    return (
      <div>
        this is TestComponent
        当前name为：{this.state.name}
        <button onClick={this.ChangeName}>修改name</button>
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <TestComponent></TestComponent>
    </div>
  )
}

export default App
