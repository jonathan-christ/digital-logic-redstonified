import React, { ReactNode, ReactPortal } from 'react';
import { ScrollView, ImageBackground, Image } from 'react-native';
import { Text, View } from '../Themed';
import Header from './Header';

type ArticleProps = {
    children: ReactNode
}

type ImageProps = {
    image: object
}

const Article = ({ children }: ArticleProps) => {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

Article.Image = (props: ImageProps) => {
    return (
        <Image source={props.image} />
    )
}

Article.Head = Header
Article.Body = undefined

export default Article

