import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations/operation';
import { useAuth } from 'hooks/useAuth';
import { UserMenuWrapper, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuWrapper>
  );
};
