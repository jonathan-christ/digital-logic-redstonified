// Home.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { View } from '@/components/Themed';
import { Data } from '@/assets/data';

import SearchList from '@/components/home/SearchList';
import Section from '@/components/home/Section';
import Search from '@/components/home/Search';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState<{ items: string[], gates: string[] }>({ items: [], gates: [] })

  const retrieveData = () => {
    let items: string[] = [], gates: string[] = [];
    Object.keys(Data).forEach((el: string) => {
      (Data[el].category === "Basic Components" ? items : gates).push(el)
    })

    setData({ items, gates })
    console.log("bom")
  }


  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };


  const filtered = [...data.items, ...data.gates].filter((item) =>
    (item.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  useEffect(() => {
    retrieveData()
  }, [])

  return (
    <View style={styles.container}>
      <Search onSearch={handleSearch} />
      {searchQuery.length === 0 ?
        <>
          <Section>
            <Section.Title>Minecraft Components</Section.Title>
            <Section.ItemList>
              {data.items.map((item, index) => (
                <Section.ItemList.Item key={index} name={item} />
              ))}
            </Section.ItemList>
          </Section>
          <Section>
            <Section.Title>Digital Logic Gates</Section.Title>
            <Section.ItemList>
              {data.gates.map((gate, index) => (
                <Section.ItemList.Item key={index} name={gate} />
              ))}
            </Section.ItemList>
          </Section>
        </> :
        <ScrollView style={styles.searchView}>
          <SearchList>
            {filtered.map((item, index) => (
              <SearchList.Item key={index} name={item} />
            ))}
          </SearchList>
          <Text style={styles.result}>
            Found {filtered.length} result{(filtered.length != 1) && 's'}
          </Text>
        </ScrollView>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 30,
    marginHorizontal: 20,
  },
  searchView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  result: {
    paddingTop: 40,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontSize: 12
  }
});
