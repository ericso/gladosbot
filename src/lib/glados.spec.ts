// tslint:disable:no-expression-statement
import test from 'ava';
import { getGladosSaying } from './glados';

test('getGladosSaying', async t => {
  t.deepEqual(await getGladosSaying(), 'This is a triumph.');
});
