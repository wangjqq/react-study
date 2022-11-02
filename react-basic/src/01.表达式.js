// 1.识别常规的变量
// 2.原生js方法调用
// 3.三元运算符
const name = 'wjq'
const getAge = () => {
  return 19
}
const flag=true
function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag?'真棒':'真菜'}
    </div>
  );
}

export default App;
