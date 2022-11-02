import React from "react"
// App 父组件 Son子组件
// 函数式的Son
function SonA (props) {
  const msg = '子组件A的msg'
  return (
    <div>this is A <button onClick={() => props.getSonAMsg(msg)}>click</button></div>
  )
}

function SonB (props) {
  console.log(props)
  return (
    <div>this is B  {props.msg}</div>
  )
}



class App extends React.Component {
  state = {
    msg: ''
  }
  getSonAMsg = (SonAMsg) => {
    this.setState({
      msg: SonAMsg
    })
  }
  render () {
    return (
      <div>
        <SonA getSonAMsg={this.getSonAMsg}></SonA>
        <SonB msg={this.state.msg}></SonB>
      </div >
    )
  }
}
export default App
