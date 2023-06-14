import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 105px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  background-color: ${({ theme }) =>
    theme.COLORS.GREEM}; /* Cor opaca com 80% de opacidade */
  opacity: 1;
  z-index: 999; /* Garante que o cabeçalho fique acima de outros elementos */
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    max-width: 100px;
    height: auto;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > span {
      font-size: 20px;
      opacity: 1;
    }

    > strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GREY};
      opacity: 0.6;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 5%;

  @media (max-width: 768px) {
    display: none; /* Esconder o menu em dispositivos móveis */
  }
`

export const MenuItem = styled.li`
  margin-left: 10%;
  font-size: 16px;
  cursor: pointer;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
