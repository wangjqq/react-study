import { useEffect, useState } from "react"



function App () {
  useEffect(() => {
    // 发送请求
    function loadData () {
      fetch('http://geek.itheima.net/v1_0/channels').then(
        res => res.json()
      ).then(data => console.log(data))
    }
    loadData()
  }, [])
  return (
    <div>

    </div>
  )
}

export default App