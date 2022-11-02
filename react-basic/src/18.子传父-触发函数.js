import React from "react"
// App 父组件 Son子组件
// 函数式的Son
function Son (props) {
  const { getSonMsg } = props
  function clickHandler () {
    const sonMsg = '这里是来自于子组件中的数据'
    getSonMsg(sonMsg)
  }
  return (
    <div>我是函数子组件 <button onClick={clickHandler}>click</button></div>
  )
}


class App extends React.Component {
  state = {
    message: 'this is message',
    list: [1, 2, 3],
    userinfo: {
      name: 'wjq',
      age: 30
    },
  }
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render () {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div >
    )
  }
}
export default App
