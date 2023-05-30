import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations/operation';
import { selectLoading } from 'redux/contacts/selectors';
import { LogForm, Label, Span, Input, Button } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <LogForm onSubmit={handleSubmit} autoComplete="off">
      <>
        <Label>
          <Span>Email</Span>
          <Input type="email" name="email" required/>
        </Label>
      </>
      <>
        <Label>
          <Span>Password</Span>
          <Input type="password" name="password" required/>
        </Label>
      </>
      <Button type="submit" disabled={isLoading}>
        Log In
      </Button>
    </LogForm>
  );
};

export default LoginForm;
