import React from "react"

// 有各种各样的内置的校验规则
import PropTypes from 'prop-types'

// 函数组件默认值 1.使用defaultProps 2.函数参数默认值(推荐的方案)
// 区别:第一种在用的时候组件内部已经有了list这个prop 第二种只有传递的时候组件内部才有这个prop



function Test ({ list = [1, 2, 3, 4, 5] }) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}
Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array.isRequired
}
// Test.defaultProps = {
//   // 定义默认值
//   list: [1, 2, 3, 4, 5]
// }
class App extends React.Component {

  render () {
    return (
      <div>
        <Test list={[1, 2, 3]}></Test>
      </div >
    )
  }
}
export default App
