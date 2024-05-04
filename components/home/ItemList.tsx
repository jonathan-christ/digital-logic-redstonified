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
    href?: string
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
    return (
        <Link
            style={styles.press}
            href={{ pathname: '/(main)/articles/[article]', params: {article: props.name}}}
        >
            <ImageBackground blurRadius={5} style={styles.item} source={props.image ?? images.title}>
                <Text style={styles.title}>{props.name}</Text>
            </ImageBackground>
        </Link>
    )
}


export default ItemList

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 15,
        width: '100%',
    },
    item: {
        flex: 1,
        minHeight: 150,
        minWidth: 150,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 15,
    },
    title: {
        fontSize: 20
    },
    press: {
        // height: '100%',
        // width: '100%'
    }
})