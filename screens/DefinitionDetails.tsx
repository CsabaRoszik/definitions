import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DefinitionDetails({ navigation }) {
  const [title] = useState('Title');
  const [description] = useState('Detailed description of the given title');

  return (
    <View style={styles.container}>
      <Text style={styles.modalText}>{navigation.getParam('title')}</Text>
      <Text style={styles.modalText}>{navigation.getParam('description')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
