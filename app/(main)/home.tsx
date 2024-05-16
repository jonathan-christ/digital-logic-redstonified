// Home.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { View, Text } from '@/components/Themed';
import { Data } from '@/assets/data';

import SearchList from '@/components/home/SearchList';
import Section from '@/components/home/Section';
import Search from '@/components/home/Search';

import images from '@/assets/images';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState<{ items: string[], gates: string[] }>({ items: [], gates: [] })

  const retrieveData = () => {
    let items: string[] = [], gates: string[] = [];
    Object.keys(Data).forEach((el: string) => {
      (Data[el].category === "Basic Components" ? items : gates).push(Data[el].title)
    })

    setData({ items, gates })
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
    <ImageBackground style={styles.container} source={images.bg_menu}>
      <View style={styles.header}>
        <View style={{ paddingHorizontal: 20, backgroundColor: 'transparent' }}>
          <Search onSearch={handleSearch} />
        </View>
        <View style={styles.titleBar}></View>
      </View>
      <ScrollView style={{ flex:1, margin: 0, paddingTop: 40, width: '100%' }}>
        {searchQuery.length === 0 ?
          <View style={{ gap: 20 }}>
            <Section>
              <Section.Title>Basic Components</Section.Title>
              <Section.ItemList>
                {data.items.map((item, index) => (
                  <Section.ItemList.Item key={index} name={item} border />
                ))}
              </Section.ItemList>
            </Section>
            <Section>
              <Section.Title>Digital Logic Gates</Section.Title>
              <Section.ItemList>
                {data.gates.map((gate, index) => (
                  <Section.ItemList.Item key={index} name={gate} border />
                ))}
              </Section.ItemList>
            </Section>
          </View> :
          <View style={styles.searchView}>
            <SearchList>
              {filtered.map((item, index) => (
                <SearchList.Item key={index} name={item} />
              ))}
              {filtered.length == 0 && 
                <Text style={[styles.result, {paddingTop: 20} ]}>There's nothing here ....</Text>
              }
            </SearchList>
            <Text style={[styles.result, (filtered.length == 0 ? {height: 0} : {})]}>
              Found <Text style={{color: 'rgb(255,110, 110)'}}>{filtered.length}</Text> result{(filtered.length != 1) && 's'}
            </Text>
          </View>
        }
      </ScrollView >
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    backgroundColor: 'rgb(50,0,0)',
    paddingTop: 70,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    objectFit: 'fill',
    height: '100%',
    width: '100%'
  },
  searchView: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100,
    flexDirection: 'column',
  },
  result: {
    paddingTop: 40,
    backgroundColor: 'transparent',
    textAlign: 'center',
    height: 50,
    width: '100%',
    color: 'white',
    fontSize: 12
  },
  titleBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    height: 2,
    borderWidth: 2,
    borderBottomColor: 'rgb(100,0,0)',
    borderTopColor: 'rgb(200,35,35)',
  }
});
