const choose = (flag) => {
  if (flag === 1) {
    return <h1>h1</h1>
  }
  if (flag === 2) {
    return <h2>h2</h2>
  }
  if (flag === 3) {
    return <h3>h3</h3>
  }
}
function App() {
  return (
    <div className="App">
      {choose(1)}
      {choose(2)}
      {choose(3)}
    </div>
  );
}

export default App;
