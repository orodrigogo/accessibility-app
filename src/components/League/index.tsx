import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isActive: boolean;
  image: ImageProps;
};

export function League({ title, isActive, image, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Icon source={image} />

      <Title >
        {title}
      </Title>
    </Container>
  );
}