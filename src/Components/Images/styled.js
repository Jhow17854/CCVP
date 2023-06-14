import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  max-width: 100%;
`

export const SlideImageWrapper = styled.div`
  transition: transform 0.3s ease;

  .carousel .slide.selected & {
    transform: scale(1.2);
    transition: transform 0.5s ease 0.7s; /* Agora a transição de escala ocorre após 0.5s */
  }
`

export const SlideImage = styled.img`
  max-width: 35%;
  max-height: 70%;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
