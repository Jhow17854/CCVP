import { Container } from './styled';

export function Button({ title, loading }) {
  return (
    <Container className='button'>
      {title}
    </Container>
  )

}