import React, { useState, useEffect } from "react";

const Carta = ({ carta }) => {
  return (
    <div className="carta">
      <img src={carta.image} alt={`${carta.value} de ${carta.suit}`} />
    </div>
  );
};

const AdivinheACarta = () => {
  const [deckId, setDeckId] = useState("");
  const [cartaAtual, setCartaAtual] = useState(null);
  const [proximaCarta, setProximaCarta] = useState(null);
  const [palpites, setPalpite] = useState("");
  const [resultado, setResultado] = useState("");
  const [pontuacao, setPontuacao] = useState(0);

  useEffect(() => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => response.json())
      .then(data => {
        setDeckId(data.deck_id);
      })
      .catch(error => console.error("Erro ao embaralhar o baralho:", error));
  }, []);

  const puxarCarta = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(response => response.json())
      .then(data => {
        setCartaAtual(proximaCarta);
        setProximaCarta(data.cards[0]); 
      })
      .catch(error => console.error("Erro ao puxar carta:", error));
  };

  const lidarComPalpite = (palpite) => {
    setPalpite(palpites);
    const valorCartaAtual = obterValorDaCarta(cartaAtual);
    const valorProximaCarta = obterValorDaCarta(proximaCarta);
    if (palpite === "maior" && valorProximaCarta > valorCartaAtual) {
      setResultado("Correto!");
      setPontuacao(pontuacao + 1);
      
    }
    if (palpite === "maior" && valorProximaCarta <= valorCartaAtual) {
      setResultado("Incorreto!");
      setPontuacao(0);
    }
    if (palpite === "menor" && valorProximaCarta < valorCartaAtual) {
      setResultado("Correto!");
      setPontuacao(pontuacao + 1);
    }
    if (palpite === "menor" && valorProximaCarta >= valorCartaAtual) {
      setResultado("Incorreto!");
      setPontuacao(0);
    } 
    if (palpite === "igual" && valorProximaCarta === valorCartaAtual) {
      setResultado("Correto!");
      setPontuacao(pontuacao + 1);
    }
    if (palpite === "igual" && valorProximaCarta !== valorCartaAtual) {
      setResultado("Incorreto!");
      setPontuacao(0);
    }
    puxarCarta();
  };

  const obterValorDaCarta = (carta) => {
    if (!carta) return 0;
    switch (carta.value) {
      case "ACE":
        return 14;
      case "KING":
        return 13;
      case "QUEEN":
        return 12;
      case "JACK":
        return 11;
      default:
        return parseInt(carta.value);
    }
  };

  useEffect(() => {
    if (!cartaAtual) {
      puxarCarta();
    }
  });

  return (
    <div>
      <h1>Adivinhe a Carta</h1>
      {cartaAtual && (
        <div>
          <h2>Carta Atual</h2>
          <Carta carta={cartaAtual} />
          <h3>Pontuação: {pontuacao}</h3>
          <h2>A próxima carta vai ser: </h2>
          <div className="palpites">
              <button className="maior" onClick={() => lidarComPalpite("maior")}>Maior</button>
              <button className="menor" onClick={() => lidarComPalpite("menor")}>Menor</button>
              <button className="igual" onClick={() => lidarComPalpite("igual")}>Igual</button>

          </div>
          <p>{resultado}</p>
          <h2>Próxima Carta</h2>
          {proximaCarta && <Carta carta={proximaCarta} />}
        </div>
      )}
    </div>
  );
};

export default AdivinheACarta;
