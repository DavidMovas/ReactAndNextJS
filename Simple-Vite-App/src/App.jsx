import './App.css'
import Count from './components/Count.jsx'
import Button from "./components/Button.jsx";

function App() {
  return (
    <div>
        <h1>Vite + React</h1>
        <Count number={5} />
        <Button />
    </div>
  )
}

export default App
