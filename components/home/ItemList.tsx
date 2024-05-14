import React, { ReactNode } from 'react';
import { Button, ScrollView, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../Themed';
import { Link } from 'expo-router';

import images from '@/assets/images';

type ItemListProps = {
    children: ReactNode
}

type ItemProps = {
    name: string,
    image?: object,
    href?: string,
    border?: boolean,
}

type data = {
    [key: string]: any
}

const ItemList = ({ children }: ItemListProps) => {
    return (
        <ScrollView horizontal>
            <View style={styles.itemContainer}>
                {children}
            </View>
        </ScrollView>
    )
}

ItemList.Item = (props: ItemProps) => {
    const bstyle = {
        ...styles.item,
        ...(props.border ? styles.border : {})
    }
    return (
        <Link
            style={styles.press}
            href={{ pathname: '/(main)/articles/[article]', params: { article: props.name } }}
        >
            <ImageBackground blurRadius={5} style={bstyle} source={props.image ?? images.title}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>{props.name}</Text>
                </View>
            </ImageBackground>
        </Link>
    )
}


export default ItemList

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        gap: 15,
        overflow: 'visible'
    },
    item: {
        overflow: 'hidden',
        flex: 1,
        width: 150,
        height: 150,
        maxHeight: 150,
        maxWidth: 150,
        backgroundColor: 'black',
    },
    border: {
        borderWidth: 4,
        borderBottomWidth: 4,
        borderBottomColor: 'rgb(100,74,0)',
        borderLeftColor: 'rgb(125, 102,38)',
        borderRightColor: 'rgb(125, 102,38)',
        borderTopColor: 'rgb(255,209,81)',
    },
    title: {
        padding: 5,
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    press: {
        backgroundColor: 'transparent',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})