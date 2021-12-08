import React from 'react';

import { Leagues } from '../../components/Leagues';
import { MathNow } from '../../components/MathNow';
import { Header } from '../../components/Header';
import { Maths } from '../../components/Maths';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Leagues />
      <MathNow />
      <Maths />
    </Container>
  );
}