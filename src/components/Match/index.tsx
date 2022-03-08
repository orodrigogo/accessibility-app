import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';

import { Container, Team, Title, Logo, Time, Hour, Day } from './styles';

type Props = TouchableOpacityProps & {
  data: {
    host_name: string;
    host_logo: ImageProps;
    visitor_name: string;
    visitor_logo: ImageProps;
    hour: string;
    day: string;
  }
}

export function Match({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Team>
        <Title>{data.host_name}</Title>
        <Logo source={data.host_logo} resizeMode="contain" />
      </Team>

      <Time>
        <Hour>{data.hour}</Hour>
        <Day>{data.day}</Day>
      </Time>

      <Team>
        <Title>{data.visitor_name}</Title>
        <Logo source={data.visitor_logo} resizeMode="contain" />
      </Team>
    </Container>
  );
}