import { useWindowScroll } from "./hooks/useWindowScroll"
import { useLocalStorage } from "./hooks/useLocalStorage"
function App () {
  const [y] = useWindowScroll()
  const [message, setMessage] = useLocalStorage('hook-key', 'af')
  setTimeout(() => {
    setMessage(message + 1)
  }, 5000)
  return (
    <div style={{ height: '12000px' }}>
      {y} {message}
    </div>
  )
}

export default App