import { ScrollView, StyleSheet } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { Text, View } from '@/components/Themed';

import Article from '@/components/article/Article';

import images from '@/assets/images';
import { Data } from '@/assets/data';

type ContentProps = {
  title: string,
  category: string,
  image?: object,
  data: ArticleData,
}

type ArticleData = {
  [k: string]: string[];
}

export default function Page() {
  const { article } = useLocalSearchParams<{ article: string }>()

  return (
    <Content {...Data[article ?? "Redstone"]} />
  )
}

const Content = (props: ContentProps) => {
  return (
    <Article>
      <Article.Head>
        <View>
          <Article.Head.Title>{props.title}</Article.Head.Title>
          <Article.Head.Category>{props.category}</Article.Head.Category>
        </View>
        <Article.Head.Image image={props.image ?? images.splash} />
      </Article.Head>
      <Article.Body>
        {parser(props.data)}
      </Article.Body>
    </Article>
  );
}

const parser = (data: ArticleData) => {
  return Object.keys(data).map((key: string, idx: number) => {
    return (
      <Article.Body.Content title={key} key={idx}>
        {data[key].map((point: string, idx: number) => {
          return (
            <Text key={idx}> - {point}</Text>
          )
        })}
      </Article.Body.Content>
    )
  })
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
