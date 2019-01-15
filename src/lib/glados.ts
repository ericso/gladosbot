import quotes from './quotes';
import logger from '../logger';

/**
 * A function that randomly chooses a quote said by Glados.
 *
 * @returns a string that is a Glados quote
 */
export function getGladosSaying(): string {
  const quote = quotes[quotes.length * Math.random() << 0];
  logger.info(`Glados says: ${quote}`);
  return quote;
}
