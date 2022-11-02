// 通过类组件修改状态的方式 counter
import React, { createRef } from "react"
class Input extends React.Component {
  // 这个实例属性的可以自定义的 语义化即可
  msgRef = createRef()
  getValue = () => {
    // 通过msgRef获取input value
    console.log(this.msgRef.current.value)
  }
  render () {
    return (
      <>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
    )
  }
}
function App () {
  return (
    <div className="App">
      <Input></Input>
    </div>
  )
}

export default App
