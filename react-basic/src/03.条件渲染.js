// 条件渲染
// 技术方案:三元表达式(常用)  逻辑&&运算符

// 1.三元表达式-满足条件才渲染一个span标签
const flag=false
function App() {
  return (
    <div className="App">
      {flag ? (
        <div>
          <span>this is span</span>
        </div>) : null}
        {false&&<span>this is span</span>}
    </div>
  );
}

export default App;
