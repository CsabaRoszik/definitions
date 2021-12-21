import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { DefinitionDetailsProps } from '../types';

export function DefinitionDetails({ route: { params: { description } } }: DefinitionDetailsProps) {
  return (
    <View style={styles.container}>
      <Paragraph>{description}</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '8px',
    marginBottom: '32px',
    marginHorizontal: '16px',
  },
});
