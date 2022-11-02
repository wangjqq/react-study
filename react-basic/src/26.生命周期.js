import React from "react"

class Test extends React.Component {
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    return (
      <div>test</div>
    )
  }
}


class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }
  state = {
    count: 0,
    flag: true
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  componentDidMount () {
    console.log('componentDidMount')
    // ajax 类似于mounted
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  render () {
    console.log('render')
    return (
      <div>
        this is div
        <button onClick={this.clickHandler}>{this.state.count}</button>
        {this.state.flag ? <Test></Test> : null}
      </div >
    )
  }
}
export default App
