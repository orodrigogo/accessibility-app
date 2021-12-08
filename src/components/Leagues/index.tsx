import React from 'react';

import { League } from '../League';

import laligaImg from '../../assets/laliga.png';
import libertadoresImg from '../../assets/libertadores.png';
import premierImg from '../../assets/premier.png';

import { Container } from './styles';

export function Leagues() {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
    >
      <League title="Premier League" image={premierImg} isActive={true} />
      <League title="La Liga" image={laligaImg} isActive={false} />
      <League title="Libertadores" image={libertadoresImg} isActive={false} />
    </Container>
  );
}