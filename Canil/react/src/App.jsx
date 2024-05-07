import React, { useState } from 'react';
import { calcularPrecoTotal } from './Model/CalcularPreco';
import "./App.css"

function App() {
  const [data, setData] = useState('');
  const [quantidadeCaesPequenos, setQuantidadeCaesPequenos] = useState(0);
  const [quantidadeCaesGrandes, setQuantidadeCaesGrandes] = useState(0);
  const [melhorPetshop, setMelhorPetshop] = useState('');
  const [precoTotal, setPrecoTotal] = useState(0);
  const [distanciaMelhorPetshop, setDistanciaMelhorPetshop] = useState(0);

  const mascara_data = (e) => {
    let input = e.target.value;
    input = input.replace(/\D/g, '');
    input = input.replace(/(\d{2})(\d)/, '$1/$2');
    input = input.replace(/(\d{2})(\d)/, '$1/$2');
    input = input.slice(0, 10);
    setData(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [dia, mes, ano] = data.split('/');
    const formattedDate = `${mes}/${dia}/${ano}`;
    const [melhorPetshop, precoTotal, distanciaMelhorPetshop] = calcularPrecoTotal(formattedDate, quantidadeCaesPequenos, quantidadeCaesGrandes);
    setMelhorPetshop(melhorPetshop);
    setPrecoTotal(precoTotal);
    setDistanciaMelhorPetshop(distanciaMelhorPetshop);
  };

  return (
    <div>
      <h1>Encontre o Melhor Petshop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Data:
          <input type="text" id="data" value={data} onChange={mascara_data} />
        </label>
        <br />
        <label>
          Quantidade de cães pequenos:
          <input type="number" value={quantidadeCaesPequenos} onChange={(e) => setQuantidadeCaesPequenos(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Quantidade de cães grandes:
          <input type="number" value={quantidadeCaesGrandes} onChange={(e) => setQuantidadeCaesGrandes(Number(e.target.value))} />
        </label>
        <br />
        <button type="submit">Calcular</button>
      </form>
      {melhorPetshop && precoTotal > 0 && (
        <div>
          <h2>Melhor petshop: {melhorPetshop}</h2>
          <h2>Preço total dos banhos: R$ {precoTotal.toFixed(2)}</h2>
          <h2>Distância: {distanciaMelhorPetshop} km</h2>
        </div>
      )}
    </div>
  );
}

export default App;
