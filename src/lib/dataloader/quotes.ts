import quotesList from './quotesList';

export const getRandomQuote = (): string => {
  return quotesList[quotesList.length * Math.random() << 0];
};