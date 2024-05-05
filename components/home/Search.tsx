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
        round
        placeholder="Type Here..."
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
    margin: 0,
  },
  search: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  input: {
    width: '100%',
  },
});
