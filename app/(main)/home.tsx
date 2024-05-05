// Home.tsx
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import Section from '@/components/home/Section';
import Search from '@/components/home/Search';
import images from '@/assets/images';

const items = [
  { name: 'Redstone' },
  { name: 'Redstone Torch' },
  { name: 'Repeater' },
];

const gates = [
  { name: 'Inverter' },
  { name: 'AND Gate' },
  { name: 'OR Gate' },
  { name: 'XOR Gate' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGates = gates.filter((gate) =>
    gate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Search onSearch={handleSearch} />
      <Section>
        <Section.Title>Minecraft Components</Section.Title>
        <Section.ItemList>
          {filteredItems.map((item, index) => (
            <Section.ItemList.Item key={index} name={item.name} />
          ))}
        </Section.ItemList>
      </Section>
      <Section>
        <Section.Title>Digital Logic Gates</Section.Title>
        <Section.ItemList>
          {filteredGates.map((gate, index) => (
            <Section.ItemList.Item key={index} name={gate.name} />
          ))}
        </Section.ItemList>
      </Section>
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
});
