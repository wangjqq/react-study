import React from "react"
// 有各种各样的内置的校验规则
import PropTypes from 'prop-types'

function Test ({ list }) {
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
