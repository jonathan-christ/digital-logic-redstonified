import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

import Section from '@/components/home/Section';
import Search from '@/components/home/Search';

import images from '@/assets/images';


export default function Home() {
  return (
    <View style={styles.container}>
      <Search /> 
      <Section>
        <Section.Title>Minecraft Components</Section.Title>
        <Section.ItemList>
          <Section.ItemList.Item name='Redstone' />
          <Section.ItemList.Item name='Redstone Torch' />
          <Section.ItemList.Item name='Repeater' />
        </Section.ItemList>
      </Section>
      <Section>
        <Section.Title>Digital Logic</Section.Title>
        <Section.ItemList>
          <Section.ItemList.Item name='Inverter' />
          <Section.ItemList.Item name='AND Gate' />
          <Section.ItemList.Item name='OR Gate' />
          <Section.ItemList.Item name='XOR Gate' />
        </Section.ItemList>
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 0,
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 30,
    marginHorizontal: 20
  },
});
