import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Avatar, Logo } from './styles';

import logoImg from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <Avatar
        source={{ uri: 'https://github.com/rodrigorgtic.png' }}
      />

      <Logo source={logoImg} />

      <TouchableOpacity>
        <FontAwesome name="power-off" size={24} color="#595859" />
      </TouchableOpacity>
    </Container>
  );
}