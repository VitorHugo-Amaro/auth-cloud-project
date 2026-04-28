import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente App (Tela de Login)', () => {
  it('deve mostrar os campos de entrada e o botão', () => {
    render(<App />);

    // Verifica se o input de e-mail aparece pelo texto que fica dentro dele
    const emailInput = screen.getByPlaceholderText(/vitor@estudante.com/i);
    const passwordInput = screen.getByPlaceholderText(/Sua senha/i);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});