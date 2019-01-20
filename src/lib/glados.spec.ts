// tslint:disable:no-expression-statement
import test from 'ava';
import { getGladosSaying } from './glados';

test('getGladosSaying', async t => {
  t.deepEqual(getGladosSaying().response_type, 'in_channel');
});
