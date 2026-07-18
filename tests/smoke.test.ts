import { test, expect } from 'vitest';
import { saudacao } from '../src/saudacao';

// SMOKE TEST: não testa regra de negócio, só confirma que o ambiente roda.
// Se este ficar VERDE, o setup (TypeScript + Vitest) está ok.
test('o ambiente está verde', () => {
  const resultado = saudacao('Vini');
  expect(resultado).toContain('verde');
});

test('a saudação inclui o nome passado', () => {
  expect(saudacao('Vini')).toContain('Vini');
});
