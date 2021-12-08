import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Input, Button } from './styles';

export function Search() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

  return (

    <Container>
      <Input
        placeholder="Encontrar partida..."
      />

      <Button
        onPress={() => setLoading(!loading)}
        disabled={loading}
      >
        {
          loading
            ? <ActivityIndicator color="#FFF" />
            : <Feather name="search" size={18} color="#FFF" />
        }
      </Button>
    </Container>
  );
}