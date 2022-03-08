import React from 'react';
import { Container, Title, Turn, Image, Score, Play, LeagueLogo } from './styles';
import { MATCH } from '../../utils/match';

export function MatchNow() {
  return (
    <Container>
      <Title>{MATCH.league}</Title>
      <Turn>{MATCH.turn}</Turn>

      <Play>
        <Image source={MATCH.host_logo} />
        <Score>{MATCH.score}</Score>
        <Image source={MATCH.visitor_logo} />
      </Play>

      <LeagueLogo source={MATCH.league_logo} />
    </Container >
  );
}