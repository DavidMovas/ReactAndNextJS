import './App.css'
import Count from './components/Count.jsx'
import Button from "./components/Button.jsx";
import {useState} from "react";

function App() {
    const [amount, setAmount] = useState(0);

  return (
    <div>
        <h1>Vite + React</h1>
        <Count amount={amount} />
        <Button setAmount={setAmount} />
    </div>
  )
}

export default App
 