// styled.js
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

  @media (max-width: 768px) {
    height: 80px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 100%;
    max-width: 100px;
    height: auto;
    border-radius: 50%;

    @media (max-width: 768px) {
      max-width: 70px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > span {
      font-size: 25px;
      opacity: 1;
    }

    > strong {
      font-size: 13px;
      color: ${({ theme }) => theme.COLORS.GREY};
      opacity: 0.6;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 1%;

  @media (max-width: 100px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    margin: 100;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    z-index: 999;
  }
`

export const MenuItem = styled.li`
  margin-left: 20px;
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
