import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 200px auto;
`

export const Link = styled.ul`
  list-style: none;

  li {
    margin-top: 12px;

    a {
      color: red;
    }
  }
`

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar horizontalmente o conteúdo */
  justify-content: center; /* Centralizar verticalmente o conteúdo */
  text-align: justify; /* Alinhar o texto dos dois lados */

  / .button {
    margin-top: 3vw; /* Margem proporcional à largura da janela de visualização */
    display: flex;
    justify-content: center;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
    text-align: center; /* Centralizar o título */

    > p {
      font-size: 16px;
      margin-top: 16px;
      text-align: justify;
    }
  }
`
