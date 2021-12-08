import React from 'react';
import { FlatList } from 'react-native';

import { Math } from '../Math';
import { TEAMS } from '../../utils/teams';

import { Container, Title } from './styles';
import { Search } from '../Search';

export function Maths() {

  return (
    <Container>
      <Title>Próximas partidas</Title>

      <Search />

      <FlatList
        data={TEAMS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Math
            data={item}
          />
        )}
      />
    </Container>
  );
}