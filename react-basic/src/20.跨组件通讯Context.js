import React, { createContext } from "react"
const { Provider, Consumer } = createContext()
function ComA () {
  return (
    <div>
      this isComA
      <ComC></ComC>
    </div>
  )
}

function ComC () {
  return (
    <div>
      this isComC
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    msg: 'this is message'
  }
  render () {
    return (
      <Provider value={this.state.msg}>
        <div>
          <ComA></ComA>
        </div >
      </Provider>
    )
  }
}
export default App
