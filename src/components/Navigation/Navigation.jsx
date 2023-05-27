import { useAuth } from 'hooks/useAuth';
import { List, Link } from './Navigations.styled';
// import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <List>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </List>
  );
};
