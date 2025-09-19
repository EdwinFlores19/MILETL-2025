import React from 'react';
import useUserStore from '../../store/userStore';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const LoginPage = () => {
  const login = useUserStore((state) => state.login);

  const handleLogin = () => {
    // In a real app, you'd have form handling and API calls
    login({ name: 'Test User', email: 'test@example.com' });
  };

  return (
    <Card>
      <h2>Login</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button onClick={handleLogin}>Login</Button>
    </Card>
  );
};

export default LoginPage;
