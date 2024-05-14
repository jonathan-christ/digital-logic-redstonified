// Search.tsx
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

type SearchBarComponentProps = {
  onSearch: (searchQuery: string) => void;
};

const Search: React.FunctionComponent<SearchBarComponentProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
    onSearch(search); // Notify parent component of search query change
  };

  return (
    <View style={styles.view}>
      <SearchBar
        style={{fontSize: 16, fontFamily: 'Minecraft', color: 'white'}}
        placeholder="Enter search terms..."
        containerStyle={styles.search}
        inputContainerStyle={styles.input}
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  view: {
    padding: 0,
    margin: 0,
  },
  search: {
    padding: 0,
    margin: 0,
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderTopWidth:4,
    borderBottomWidth:4,
    borderBottomColor: 'rgb(100,0,0)',
    borderLeftColor: 'rgb(125, 38,38)',
    borderRightColor: 'rgb(125, 38,38)',
    borderTopColor: 'rgb(255,81,81)',
  },
  input: {
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: 0,
    width: '100%',
  },
});
