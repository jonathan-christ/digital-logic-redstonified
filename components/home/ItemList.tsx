import React, { ReactNode } from 'react';
import { Button, ScrollView, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../Themed';
import { Link } from 'expo-router';

import images from '@/assets/images';
import Colors from '@/constants/Colors';

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
        ...(props.border ? Colors.border : {})
    }
    return (
        <Link
            style={styles.press}
            href={{ pathname: '/(main)/articles/[article]', params: { article: props.name } }}
            asChild
        >
            <Pressable>
                {({ pressed }) => (
                    <ImageBackground blurRadius={5} style={{ ...bstyle, ...(pressed ? Colors.borderHL : {}) }} source={props.image ?? images.title}>
                        <View style={styles.overlay}>
                            <Text style={styles.title}>{props.name}</Text>
                        </View>
                    </ImageBackground>
                )}
            </Pressable>
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