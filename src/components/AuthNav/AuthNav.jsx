// import { NavLink } from 'react-router-dom';
import { List, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <Link to="/register">Register</Link>
      <Link to="/login">Sign In</Link>
    </List>
  );
};
