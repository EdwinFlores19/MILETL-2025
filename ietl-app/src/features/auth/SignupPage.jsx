import React from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const SignupPage = () => {
  return (
    <Card>
      <h2>Sign Up</h2>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Sign Up</Button>
    </Card>
  );
};

export default SignupPage;
