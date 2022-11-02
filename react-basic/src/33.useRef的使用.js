import React, { useEffect, useRef } from "react"

// 组件实例 类组件
// dom对象 标签
class TestC extends React.Component {
  getName = () => {
    console.log('name')
  }
  render () {
    return (
      <div>我是类组件</div>
    )
  }
}

function App () {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    testRef.current.getName()
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])
  return (
    <div>
      <TestC ref={testRef}></TestC>
      <h1 ref={h1Ref}>h1</h1>
    </div>
  )
}

export default App