import React, { useState, useEffect } from "react";

const Carta = ({ carta }) => {
  return (
    <div className="carta">
      <img src={carta.image} alt={`${carta.value} de ${carta.suit}`} />
    </div>
  );
};

const Blackjack = () => {
  const [deckId, setDeckId] = useState("");
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => response.json())
      .then(data => {
        setDeckId(data.deck_id);
      })
      .catch(error => console.error("Erro ao embaralhar o baralho:", error));
  }, []);

  const deal = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
      .then(response => response.json())
      .then(data => {
        const playerInitialCards = [data.cards[0], data.cards[1]];
        const dealerInitialCards = [data.cards[2], data.cards[3]];

        setPlayerCards(playerInitialCards);
        setDealerCards(dealerInitialCards);
        setPlayerScore(calculateScore(playerInitialCards));
        setDealerScore(calculateScore(dealerInitialCards));
        setResult("");
        setGameOver(false);
      })
      .catch(error => console.error("Erro ao distribuir as cartas:", error));
  };

  const calculateScore = (cards) => {
    let score = 0;
    let aceCount = 0;

    cards.forEach((card) => {
      if (card.value === "ACE") {
        aceCount++;
        score += 11;
      } else if (["KING", "QUEEN", "JACK"].includes(card.value)) {
        score += 10;
      } else {
        score += parseInt(card.value);
      }
    });

    while (score > 21 && aceCount > 0) {
      score -= 10;
      aceCount--;
    }

    return score;
  };

  const hit = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(data => {
        const newPlayerCards = [...playerCards, data.cards[0]];
        setPlayerCards(newPlayerCards);
        setPlayerScore(calculateScore(newPlayerCards));

        if (playerScore > 21) {
          setResult("Dealer venceu. Jogador estourou!");
          setGameOver(true);
        }
      })
      .catch(error => console.error("Erro ao puxar carta:", error));
  };

  const stand = () => {
    setGameOver(true);

    while (dealerScore < 17) {
      fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => response.json())
        .then(data => {
          const newDealerCards = [...dealerCards, data.cards[0]];
          setDealerCards(newDealerCards);
          setDealerScore(calculateScore(newDealerCards));
        })
        .catch(error => console.error("Erro ao puxar carta:", error));
    }

    if (dealerScore > 21 || playerScore > dealerScore) {
      setResult("Jogador venceu!");
    } else if (playerScore < dealerScore) {
      setResult("Dealer venceu!");
    } else {
      setResult("Empate!");
    }
  };

  return (
    <div>
      <h1>Blackjack</h1>
      <button onClick={deal} disabled={!gameOver}>Deal</button>
      <button onClick={hit} disabled={gameOver || playerScore >= 21}>Hit</button>
      <button onClick={stand} disabled={gameOver || playerScore >= 21}>Stand</button>
      <p>Pontuação do Jogador: {playerScore}</p>
      <p>Pontuação do Dealer: {dealerScore}</p>
      {result && <p>{result}</p>}
      <div className="cartas">
        <div className="cartas-jogador">
          <h2>Cartas do Jogador</h2>
          {playerCards.map((carta, index) => (
            <Carta key={index} carta={carta} />
          ))}
        </div>
        <div className="cartas-dealer">
          <h2>Cartas do Dealer</h2>
          {dealerCards.map((carta, index) => (
            <Carta key={index} carta={carta} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blackjack;
