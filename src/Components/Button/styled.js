import styled from 'styled-components'

export const Container = styled.button`
  width: fit-content;
  background-color: ${({ theme }) => theme.COLORS.BROWN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;

  height: 56px;
  border: 0;
  padding: 0 100px;
  margin-top: 10px;
  border-radius: 15px;
  font-weight: 500;
  max-width: 100%;

  &:disabled {
    opacity: 0.5;
  }
`
