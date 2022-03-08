import React from 'react';

import { Leagues } from '../../components/Leagues';
import { MatchNow } from '../../components/MatchNow';
import { Header } from '../../components/Header';
import { Matches } from '../../components/Matches';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Leagues />
      <MatchNow />
      <Matches />
    </Container>
  );
}