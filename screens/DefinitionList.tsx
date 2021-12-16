import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { definitions } from '../assets/definitions.json';
import { Definition } from '../types';

const byTitle = ({ title: titleA }: Definition, { title: titleB }: Definition) => {
  if (titleA === titleB) return 0;
  return titleA < titleB ? -1 : 1;
};

const keyExtractor = ({ id }: Definition) => id.toString();

const renderDefinition = (
  { item, item: { title } }: ListRenderItemInfo<Definition>,
  onSelect: (definition: Definition) => void,
) => (
  <ListItem bottomDivider onPress={() => onSelect(item)}>
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
);

export default function DefinitionList({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchByTerm = ({ title }: Definition) => {
    if (searchTerm === '') return true;
    const expression = new RegExp(`${searchTerm}*`, 'gi');
    return expression.test(title);
  };

  const displayDetails = (definition: Definition) => {
    navigation.navigate('DefinitionDetails', definition);
  }

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={handleSearchTermChange}
        value={searchTerm}
        lightTheme
      />
      <ScrollView>
        <FlatList
          keyExtractor={keyExtractor}
          data={definitions.filter(searchByTerm).sort(byTitle)}
          renderItem={info => renderDefinition(info, displayDetails)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
