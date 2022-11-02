// react 完成列表渲染
// 技术方案:map
const songs = [
  {id:1,name:'wjq'},
  {id:2,name:'qwe'},
  {id:3,name:'rty'}
]
function App() {
  return (
    <div className="App">
      <ul>
        {songs.map(song => <li key={song.id}>{song.name }</li>)}
      </ul>
    </div>
  );
}

export default App;
