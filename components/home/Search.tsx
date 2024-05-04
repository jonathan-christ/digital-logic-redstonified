import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const Search: React.FunctionComponent<SearchBarComponentProps> = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search: string) => {
        setSearch(search);
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
    )
}

export default Search

const styles = StyleSheet.create({
    view: {
        margin: 0
    },
    search: {
        width: '100%',
        backgroundColor: 'transparent'
    },
    input: {
        width: '100%'
    },
});