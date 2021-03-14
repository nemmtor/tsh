import React from 'react';
import { render } from 'tests';
import { Login } from './Login';

describe('Login', () => {
  test('Displays login view properly', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    expect(getByText('join.tsh.io')).toBeInTheDocument();

    expect(getByText('Login')).toBeInTheDocument();

    expect(getByText('Username')).toBeInTheDocument();

    expect(getByPlaceholderText('Enter username')).toBeInTheDocument();

    expect(getByText('Password')).toBeInTheDocument();

    expect(getByPlaceholderText('Enter password')).toBeInTheDocument();

    expect(getByText('Log in')).toBeInTheDocument();

    expect(getByText('Forgot password?')).toBeInTheDocument();
  });
});
