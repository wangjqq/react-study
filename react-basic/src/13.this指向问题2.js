import React from "react"
// this有问题的写法
class Test extends React.Component {


  handler () {
    console.log(this)
    // this.setState去修改数据还可以吗？ 就会报错了
  }

  render () {
    // render函数中的this已经被react内部作了修正
    // 这里的this就是指向当前的组件实例对象
    // 那我们箭头函数中的this 直接沿用 所以也是指向组件的实例对象
    console.log('父函数中的this指向为：', this)
    return (
      // 如果不用constructor做修正 直接可以在事件绑定的位置
      // 通过箭头函数的写法 直接沿用父函数中的this指向也是可以的
      <button onClick={() => this.handler()}>click</button>
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
