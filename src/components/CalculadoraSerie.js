import React from 'react';
import SeriesNumericas from '../test/test';

const CalculadoraSerie = ({ number, onResultadoChange }) => {
  const result = SeriesNumericas.calcularTermino(number);
  onResultadoChange(result);
  return null;
};

export default CalculadoraSerie;
