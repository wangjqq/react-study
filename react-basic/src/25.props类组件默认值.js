import React from "react"

// 里面有各种各样的内置的校验规则
// 类组件默认值 1.defaultProps 2.static类静态属性定义

class Test extends React.Component {
  static defaultProps = {
    list: 11
  }
  render () {
    return (
      <div>{this.props.list}</div>
    )
  }
}

// Test.defaultProps = {
//   list: 10
// }

class App extends React.Component {

  render () {
    return (
      <div>
        <Test ></Test>
      </div >
    )
  }
}
export default App
