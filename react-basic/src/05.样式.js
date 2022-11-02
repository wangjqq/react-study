// jsx样式控制
// 2.类名样式
import './app.css'
// 1.行内样式
const style = {
  color: 'red', fontSize: '200px'
}


const activeFlag = true
function App() {
  return (
    <div className="App">
      <span style={style}>span</span>
      <span className={activeFlag && 'active'}>测试类名样式</span>
    </div>
  );
}

export default App;
