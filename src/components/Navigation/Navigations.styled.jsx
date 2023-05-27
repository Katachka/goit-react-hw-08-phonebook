import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  color: var(--main-text-color);
  transition: color var(--main-hover-animation);
  font-weight: bold;

  :hover,
  :focus {
    color: var(--accent-text-color);
  }

  &.active {
    color: var(--accent-text-color);
  }
`;
