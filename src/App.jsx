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
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

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

    const newFlippedCards = [...flippedCards, card.id];
      setFlippedCards(newFlippedCards);

      // Check for match if two cards are flipped
      if(flippedCards.length === 1) {
        const firstCard = cards[flippedCards[0]];

        if(firstCard.value === card.value) {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((score) => score + 1)
          setTimeout(() => {
            
            setCards( (prev) => prev.map((c) => {
              if(c.id === card.id || c.id === firstCard.id) {
                return {...c, isMatched: true}
              }else {
                return c;
              }
            })
          );
            setFlippedCards([]);
          }, 500);

        } else {
          //Flip back card 1, card 2

          setTimeout(() => {
            const flippedBackCards = newCards.map((c) => {
              if(newFlippedCards.includes(c.id) || c.id === card.id) {
                return {...c, isFlipped: false};
              } else {
                return c;
              }
            });
            setCards(flippedBackCards);
            setFlippedCards([]);
          }, 1000);
        }
      }

      setMoves((moves) => moves + 1)
  };
  
  return (
    <div className="app">
      <GameHeader score={score} moves={moves}></GameHeader>

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
