export const SET_BEBIDAS = 'SET_BEBIDAS';
export const SET_SALGADOS = 'SET_SALGADOS';
export const SET_DOCES = 'SET_DOCES';

export const setBebidas = (bebidas) => ({
  type: SET_BEBIDAS,
  payload: bebidas,
});

export const setSalgados = (salgados) => ({
  type: SET_SALGADOS,
  payload: salgados,
});

export const setDoces = (doces) => ({
  type: SET_DOCES,
  payload: doces,
});
