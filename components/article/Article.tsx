import React, { ReactNode, ReactPortal } from 'react';
import { StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { Text, View } from '../Themed';
import { useFonts } from 'expo-font';
import Header from './Header';
import Body from './Body';
import images from '@/assets/images';


type ArticleProps = {
    children: ReactNode
}

const { height } = Dimensions.get('window')

const Article = ({ children }: ArticleProps) => {
    return (
        <ScrollView>
            <ImageBackground style={styles.view} source={images.bg_menu}>
                {children}
            </ImageBackground>
        </ScrollView>
    )
}

Article.Head = Header
Article.Body = Body

export default Article

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    view: {
        flex: 1,
        position: 'relative',
        height: '100%',
        width: '100%',
        marginBottom: height*0.1,
        fontFamily: 'Minecraft'
    }
})

