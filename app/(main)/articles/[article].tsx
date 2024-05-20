import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { Data } from '@/assets/data';

import ContentRender from '@/components/article/ContentRender';
import TruthTable from '@/components/article/TruthTable';
import { Simulation } from '@/components/article/Simulation';

import Article from '@/components/article/Article';
import images from '@/assets/images';


type ContentProps = {
  title: string,
  category: string,
  image?: object,
  data: ArticleData,
}

type ArticleData = {
  [k: string]: any;
}

type CategoryType = keyof typeof Data

interface TruthTableData {
  Inputs: { [key: string]: number[] };
  Outputs: { [key: string]: number[] };
}

export default function Page() {
  const { category, article } = useLocalSearchParams<{ category: string; article: string }>()
  const categoryDefault = (category ?? "Components") as CategoryType; // Ensure category has a valid type
  const articleDefault = (article ?? "Redstone Dust")

  return (
    <Content {...Data[categoryDefault][articleDefault]} />
  )
}

const Content = ({title, category, image, data}: ContentProps) => {
  const headerImg = category === "Basic Components" ? images.basic : images.digi
  return (
    <Article>
      <Article.Head image={headerImg}>
        <Article.Head.Title>{title}</Article.Head.Title>
        <Article.Head.Category>{category}</Article.Head.Category>
        <Article.Head.Image image={image ?? images.splash} />
      </Article.Head>
      <Article.Body>
        {parser(data)}
      </Article.Body>
    </Article>
  );
}

const parser = (data: ArticleData) => {
  const someString: string[] = ["aa","dd","ss","ff"]
  return Object.keys(data).map((key: string, idx: number) => {
    return (
      <Article.Body.Content title={key.toUpperCase()} key={idx}>
        {key === "Truth Table" ? (
          <TruthTable data={{ ...data[key] }} />
        ) : key === "Simulation" ? (
          <Simulation data={data[key]} />
        )
          : (
            data[key].map((point: any, idx: number) => (
              <ContentRender data={point} key={idx} />
            ))

          )
        }
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
  view: {

  },
});
