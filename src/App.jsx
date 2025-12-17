import { useEffect, useState } from "react";
import { Card, GameHeader } from "./components"

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
  const [cards, setCards] = useState([]);

  const initializeGame = () => {
    //Shuffle the cards

    const finalCards = cardValues.map((value, index) => (
      {
        id:index,
        value,
        isFlipped: false,
        isMatched: false,
      }

    ));

      setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    // Don't allow click if already flipped, matched

    if(card.isFlipped || card.isMatched) {
      return;
    }
    //Update card flipepd state
    const newCards = cards.map((c) => {
      if(c.id === card.id) {
        return {...c, isFlipped: true};
      } else {
        return c;
      }
    });

    setCards(newCards);
  };
  
  return (
    <div className="app">
      <GameHeader score={3} moves={10}></GameHeader>

      <div className="cards-grid">
        {cards.map((card) => (
          <Card 
            card={card}
            onClick={handleCardClick}
          >

            </Card>
        ))}
      </div>
    </div>
  )
}

export default App
