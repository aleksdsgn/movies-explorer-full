import {
  WINDOW_WIDTH_M,
  WINDOW_WIDTH_S,
  INITIAL_CARDS_L,
  INITIAL_CARDS_M,
  INITIAL_CARDS_S,
  ADD_CARDS_L,
  ADD_CARDS_M,
  ADD_CARDS_S,
} from './constants';

export const calcCardsCounter = () => {
  const counter = { init: INITIAL_CARDS_L, more: ADD_CARDS_L };

  if (window.innerWidth < WINDOW_WIDTH_M) {
    counter.init = INITIAL_CARDS_M;
    counter.more = ADD_CARDS_M;
  }

  if (window.innerWidth < WINDOW_WIDTH_S) {
    counter.init = INITIAL_CARDS_S;
    counter.more = ADD_CARDS_S;
  }

  return counter;
};
