// Login.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './pages/login';

describe('Login Component', () => {
  test('should allow a user to log in', async () => {
    const mockLogin = jest.fn();
    render(<Login onLogin={mockLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /log in/i }));

    expect(mockLogin).toHaveBeenCalledWith('admin', 'password123');
  });
});
