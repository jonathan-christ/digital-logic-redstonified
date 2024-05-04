import React, { ReactNode, ReactPortal } from 'react';
import { StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { Text, View } from '../Themed';
import Header from './Header';
import Body from './Body';

type ArticleProps = {
    children: ReactNode
}

const Article = ({ children }: ArticleProps) => {
    return (
        <ScrollView>
            <View style={styles.view}>
                {children}
            </View>
        </ScrollView>
    )
}

Article.Head = Header
Article.Body = Body

export default Article

const styles = StyleSheet.create({
    
    image: {
        position: 'absolute',
        height: 500,
        width: 500,
    },
    title: {
        fontSize: 20
    },
    view: {
        flex: 1,
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    }
})

