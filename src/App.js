import React, { useState } from 'react';
import FormularioComponent from './components/FormularioComponent';
import CalculadoraSerie from './components/CalculadoraSerie';
import ResultComponent from './components/ResultadoComponent';

const App = () => {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null);

  const handleNumeroChange = (n) => {
    setNumber(n);
  };

  const handleResultadoChange = (res) => {
    setResult(res);
  };

  return (
    <div>
      <FormularioComponent onNumeroChange={handleNumeroChange} />
      {number !== null && <CalculadoraSerie number={number} onResultadoChange={handleResultadoChange} />}
      {result !== null && <ResultComponent result={result}/>}
    </div>
  );
};

export default App;
