import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Article from '@/components/article/Article';

export default function TabTwoScreen() {
  return (
    <Article>
      <Article.Title>
      </Article.Title>
    </Article>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: (StatusBar.currentHeight !== undefined ? StatusBar.currentHeight*2 : 0),
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
