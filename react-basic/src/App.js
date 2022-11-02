import React, { createContext, useContext, useState } from "react"

import Context from "./context"

function ComA () {
  const count = useContext(Context)
  return (
    <div>
      this is ComA
      <br />
      app传过来的数据为:{count}
      <ComC></ComC>
    </div>
  )
}

function ComC () {
  const count = useContext(Context)
  return (
    <div>
      this is ComC
      <br />
      app传过来的数据为:{count}
    </div>
  )
}

function App () {
  const [count, setCount] = useState(20)
  return (

    <div>
      <ComA></ComA>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>

  )
}

export default App