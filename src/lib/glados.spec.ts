// tslint:disable:no-expression-statement
import test from 'ava';
import { getGladosSaying } from './glados';
import quotes from './quotes';

test('getGladosSaying', async t => {
  t.deepEqual(getGladosSaying().response_type, 'in_channel');
  t.true(quotes.includes(getGladosSaying().text));
});
