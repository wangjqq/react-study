import React from "react"
// this有问题的写法
class Test extends React.Component {

  constructor() {
    super()
    // 使用bind强行修正我们的this指向
    // 相当于在类组件初始化的阶段 就可以把回调函数的this修正到
    // 永远指向当前组件实例对象
    this.handler = this.handler.bind(this)
  }

  handler () {
    console.log(this)
    // this.setState去修改数据还可以吗？ 就会报错了
  }

  render () {
    return (
      <button onClick={this.handler}>click</button>
    )
  }
}

function App () {
  return (
    <div className="App">
      <Test></Test>
    </div>
  )
}

export default App
