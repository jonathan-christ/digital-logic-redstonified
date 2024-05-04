import { StyleSheet } from 'react-native';

import { SearchBar } from '@rneui/themed';
import { Text, View } from '@/components/Themed';

import Section from '@/components/home/Section';
import Article from '@/components/article/Article';
import images from '@/assets/images';

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchBar platform='android' />
      <Section>
        <Section.Title>Minecraft Components</Section.Title>
        <Section.Item name='Redstone' />
        <Section.Item name='Redstone Torch' />
        <Section.Item name='Repeater' />
      </Section>
      <Section>
        <Section.Title>Digital Logic</Section.Title>
        <Section.Item name='Inverter' />
        <Section.Item name='AND Gate' />
        <Section.Item name='OR Gate' />
        <Section.Item name='XOR Gate' />
      </Section>
      <Article>
        <Article.Head image={images.titleScene}>
          <Article.Head.Title>Redstone Dust</Article.Head.Title>
          <Article.Head.Category>Minecraft Components</Article.Head.Category>
        </Article.Head>
        <Article.Image image={images.title} />
      </Article>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
