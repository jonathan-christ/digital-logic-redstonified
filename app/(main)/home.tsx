// Home.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { View, Text } from '@/components/Themed';
import { Data, Merged } from '@/assets/data';

import SearchList from '@/components/home/SearchList';
import Section from '@/components/home/Section';
import Search from '@/components/home/Search';

import images from '@/assets/images';
const { height, width } = Dimensions.get('window')

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState<{ items: string[], gates: string[] }>({ items: [], gates: [] })

  const retrieveData = () => {
    let items: string[] = [], gates: string[] = [];
    Object.keys(Data.Components).forEach((el: string) => {
      items.push(Data.Components[el].title)
    })

    Object.keys(Data.Gates).forEach((el: string) => {
      gates.push(Data.Gates[el].title)
    })

    setData({ items, gates })
  }


  const handleSearch = (query: string) => {
    setSearchQuery(query);
  }

  const searchCateg = (name: string) => {
    return Merged[name].category === "Logic Gates" ? "Gates" : "Components"
  }


  const filtered = [...data.items, ...data.gates].filter((item) =>
    (item.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  useEffect(() => {
    retrieveData()
  }, [])

  return (
    <ImageBackground style={styles.container} source={images.bg_menu}>
      <ImageBackground style={styles.header} source={images.bg_heading}>
        <View style={{ paddingHorizontal: 20, backgroundColor: 'transparent' }}>
          <Search onSearch={handleSearch} />
        </View>
        <View style={styles.titleBar}></View>
      </ImageBackground>
      <ScrollView style={{ paddingTop: height * 0.05, width: '100%' }}>
        {searchQuery.length === 0 ?
          <View style={{ gap: 20, paddingBottom: height*0.15 }}>
            <Section>
              <Section.Title>Basic Components</Section.Title>
              <Section.ItemList>
                {data.items.map((item, index) => (
                  <Section.ItemList.Item key={index} name={item} category={"Components"} image={Merged[item].image} border />
                ))}
              </Section.ItemList>
            </Section>
            <Section>
              <Section.Title>Digital Logic Gates</Section.Title>
              <Section.ItemList>
                {data.gates.map((gate, index) => (
                  <Section.ItemList.Item key={index} name={gate} category={"Gates"} image={Merged[gate].image} border />
                ))}
              </Section.ItemList>
            </Section>
          </View> :
          <View style={styles.searchView}>
            <SearchList>
              {filtered.map((item, index) => (
                <SearchList.Item key={index} name={item} category={searchCateg(item)} image={Merged[item].image} />
              ))}
              {filtered.length == 0 &&
                <Text style={[styles.result, { paddingTop: 20 }]}>There's nothing here ....</Text>
              }
            </SearchList>
            <Text style={[styles.result, (filtered.length == 0 ? { height: 0 } : {})]}>
              Found <Text style={{ color: 'rgb(255,110, 110)' }}>{filtered.length}</Text> result{(filtered.length != 1) && 's'}
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
    paddingTop: height * 0.08,
    paddingBottom: height * 0.05,
    resizeMode: 'stretch'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  searchView: {
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.2,
    flexDirection: 'column',
  },
  result: {
    paddingTop: height * 0.04,
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
