import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.div`
  display: flex;
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
  color: var(--main-text-color);
  transition: color var(--main-hover-animation);
  :hover,
  :focus {
    color: var(--accent-text-color);
  }
  &.active {
    color: var(--accent-text-color);
  }
`;
