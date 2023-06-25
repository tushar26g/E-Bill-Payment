import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
    test('renders login form correctly', () => {
        render(<LoginPage />);

        const usernameInput = screen.getByLabelText('User Id.');
        const passwordInput = screen.getByLabelText('Password');
        const loginButton = screen.getByRole('button', { name: 'Login' });

        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });
});
