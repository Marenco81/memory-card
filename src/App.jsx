import { GameHeader } from "./components"

const cardValues = [
  "🍔",
  "🍕",
  "🍗",
  "🥗",
  "🥑",
  "🍟",
  "🍣",
  "🍩",
  "🍔",
  "🍕",
  "🍗",
  "🥗",
  "🥑",
  "🍟",
  "🍣",
  "🍩",
];

function App() {
  
  return (
    <div className="app">
      <GameHeader score={3} moves={10}></GameHeader>

      <div className="card-grid">

      </div>
    </div>
  )
}

export default App
