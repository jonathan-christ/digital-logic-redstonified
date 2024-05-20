// Search.tsx
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet, Image } from 'react-native';

import Colors from '@/constants/Colors';

type SearchBarComponentProps = {
  onSearch: (searchQuery: string) => void;
};

const Search: React.FunctionComponent<SearchBarComponentProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);

  const updateSearch = (search: string) => {
    setSearch(search);
    onSearch(search); // Notify parent component of search query change
  };

  const focusHandler = (state: boolean) => {
    setFocused(state)
  }

  return (
    <View style={styles.view}>
      <SearchBar
        style={{ fontSize: 16, fontFamily: 'Minecraft', color: 'white' }}
        onBlur={() => focusHandler(false)}
        onFocus={() => focusHandler(true)}
        placeholder={focused ? "" : "Enter search terms..."}
        containerStyle={[styles.search, Colors.border, (focused ? Colors.borderHL : {})]}
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
  },
  input: {
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: 0,
    width: '100%',
  },
});
