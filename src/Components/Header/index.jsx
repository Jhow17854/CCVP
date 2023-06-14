import React, { useState } from 'react';
import { Container, Profile, Menu, MenuItem } from './styled';

export function Header() {
  const [isOpen] = useState(false);

  return (
    <Container>
      <Profile>
        <img src="/img/ccvp.png" alt="Logo Da comunidade" />
        <div>
          <span>CCVP</span>
          <strong>Comunidade Cristã Vida Plena</strong>
        </div>
      </Profile>

      <Menu isOpen={isOpen}>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <MenuItem>Doações</MenuItem>
        <MenuItem>Contatos</MenuItem>
      </Menu>
    </Container>
  );
}
