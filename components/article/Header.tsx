import React, { ReactNode, ReactPortal } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { Text, View } from '../Themed';

import images from '@/assets/images';
type HeaderProps = {
    children: ReactNode,
    image?: object
}

type TextProp = {
    children: string
}

type ImageProps = {
    image: object
}

const Header = ({ children, image }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <ImageBackground blurRadius={5} style={[styles.view, {paddingHorizontal: 0}]} source={image}>
                <View style={[styles.view, {borderWidth: 0, backgroundColor: 'rgba(0,0,0,0.5)'}]}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    )
}

Header.Title = ({ children }: TextProp) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

Header.Category = ({ children }: TextProp) => {
    return (
        <Text style={styles.categ}>
            {children}
        </Text>
    )
}

Header.Image = (props: ImageProps) => {
    return (
        <View style={styles.imgContainer}>
            <Image style={styles.image} source={props.image} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 20,
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(50,0,0)',
        borderWidth: 4,
        borderBottomColor: 'rgb(125,10,10)',
        overflow: 'visible',
        zIndex: 1,
        justifyContent: 'center',
    },
    image: {
        height: 125,
        width: 125,
        backgroundColor: 'black',
        objectFit: 'contain'
    },
    header: {
        height: 250,
        width: '100%'
    },
    title: {
        fontSize: 30
    },
    categ: {
        fontSize: 16,
        color: 'red'
    },
    imgContainer: {
        right: 20,
        bottom: -50,
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        borderWidth: 4,
        borderBottomColor: 'rgb(100,0,0)',
        borderLeftColor: 'rgb(125, 10,10)',
        borderRightColor: 'rgb(125, 10,10)',
        borderTopColor: 'rgb(200,35,35)',
    }
})