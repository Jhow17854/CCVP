import React from 'react';
import { Container, Content } from './styled';
import ImageSlide from '../../Components/Images';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';


export function Inicio() {
  return (

    <Container>
      <Header />
      <main>

        <ImageSlide images={['img/ccvp.png', 'img/well.png', 'img/lucca.png']} />
        <Content>

          <h1>Sobre Nossa Comunidade</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates iure pariatur eligendi ducimus
            quisquam distinctio, repellendus ipsa voluptate mollitia odit delectus dolore nam omnis. Molestias quam
            corporis beatae libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum minus
            reiciendis sed soluta eveniet amet laborum ipsum, ratione perspiciatis necessitatibus non dolor excepturi.
            Architecto totam ullam laboriosam cupiditate, quas rem!
          </p>
          <h1>Sobre Nossa Comunidade</h1>
          <br />
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates iure pariatur eligendi ducimus
            quisquam distinctio, repellendus ipsa voluptate mollitia odit delectus dolore nam omnis. Molestias quam
            corporis beatae libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum minus
            reiciendis sed soluta eveniet amet laborum ipsum, ratione perspiciatis necessitatibus non dolor excepturi.
            Architecto totam ullam laboriosam cupiditate, quas rem!
          </p>



          <Button title="Entrar" loading />
        </Content>


      </main>
    </Container>
  );
}
