import React from "react"
function ListItem (props) {
  return (
    <div>
      <span>{props.list.id}</span>
      <span>{props.list.name}</span>
      <span>{props.list.price}</span>
      <span>{props.list.info}</span>
      <button onClick={() => props.del(props.list.id)}>删除</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' }
    ]
  }
  del = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render () {
    return (
      <div>
        {this.state.list.map(item => <ListItem key={item.id} list={item} del={this.del}>
          <p>children属性</p>
        </ListItem>)}
      </div >
    )
  }
}
export default App
