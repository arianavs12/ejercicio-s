import React from 'react';

const ResultComponent = ({ result }) => {
  return (
    <div className="mt-4 p-3 border rounded">
      <h2 className="mb-3">Resultado del cálculo:</h2>
      <p className="lead">{result}</p>
    </div>
  );
};

export default ResultComponent;

