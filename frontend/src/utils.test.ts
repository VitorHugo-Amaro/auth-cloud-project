import { validateEmail } from './utils';

describe('Validações de Texto (Unitário)', () => {
  it('deve retornar true para um e-mail válido', () => {
    expect(validateEmail('vitor@puc.com')).toBe(true);
  });

  it('deve retornar false para um e-mail sem @', () => {
    expect(validateEmail('vitor_at_puc.com')).toBe(false);
  });
});