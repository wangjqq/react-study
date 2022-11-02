// 通过类组件修改状态的方式 counter
import React from "react"
class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'jack',
      age: 20
    }
  }

  // 事件回调函数
  changeCount = () => {
    // 修改state
    // react不能直接修改
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <>
        <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={this.changeCount}>{this.state.count}click</button>
      </>
    )
  }
}
function App () {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}

export default App
