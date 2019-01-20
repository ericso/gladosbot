import logger from '../logger';
import { getRandomQuote } from './dataloader/quotes';

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
  const quote = getRandomQuote();
  logger.info(`Glados says: ${quote}`);
  return {
    response_type: 'in_channel',
    text: quote,
  };
}