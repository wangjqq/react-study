import React from "react"
// App 父组件 Son子组件
// 函数式的Son
function SonF (props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div>我是函数子组件,{props.list}</div>
  )
}

// 类组件的Son
class SonC extends React.Component {

  render () {
    console.log(this.props)
    const { list, user, getMsg, child } = this.props
    return (
      <div>我是类子组件,
        {list.map(item => <p key={item}>{item}</p>)}
        {user.name}
        <button onClick={getMsg}>触发父组件传入的函数</button>
        {child}
      </div>
    )
  }
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
  getMsg = () => {
    console.log('父组件中的函数')
  }
  render () {
    return (
      <div>
        <SonF list={this.state.list}></SonF>
        <SonC list={this.state.list} user={this.state.userinfo} getMsg={this.getMsg} child={<span>this is span</span>}></SonC>
      </div >
    )
  }
}
export default App
