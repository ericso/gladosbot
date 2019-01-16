import quotes from './quotes';
import logger from '../logger';

type GladosResponse = {
  response_type: string,
  text: string,
};

/**
 * A function that randomly chooses a quote said by Glados.
 *
 * @returns a string that is a Glados quote
 */
export function getGladosSaying(): GladosResponse {
  const quote = quotes[quotes.length * Math.random() << 0];
  logger.info(`Glados says: ${quote}`);
  return {
    response_type: 'in_channel',
    text: quote,
  };
}