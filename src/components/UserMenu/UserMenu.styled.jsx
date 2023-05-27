import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div` 
  display: flex;
  justify - content: space - between;
  `;

export const Text = styled.h3`
  font-weight: 700;
  margin-right: 15px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 20px 0 20px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }

  width: 100%;
`;
