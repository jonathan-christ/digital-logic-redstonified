import React, { ReactNode } from 'react';
import { Button, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
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

const SearchList = ({ children }: ItemListProps) => {
    return (
        <View style={styles.view}>
            <View style={styles.itemContainer}>
                {children}
            </View>
        </View>
    )
}

SearchList.Item = (props: ItemProps) => {
    return (
        <Link
            style={{width: '100%'}}
            href={{ pathname: '/(main)/articles/[article]', params: { article: props.name } }}
        >
            <View style={styles.item}>
                <Image blurRadius={5} style={styles.image} source={props.image ?? images.title} />
                <Text style={styles.title}>{props.name}</Text>
            </View>
        </Link>
    )
}


export default SearchList

const styles = StyleSheet.create({
    view : {
        width: '100%',
        paddingHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderRadius: 15,
        backgroundColor: 'rgb(40,40,40)',
        gap: 0,
    },
    item: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        padding: 15,
        
        justifyContent: 'center',
        alignItems: 'center',
        
        gap: 10,
    },
    title: {
        fontSize: 14,
    },
    image: {
        borderRadius: 15,
        height: 50,
        width: 50,
        objectFit: 'contain',
        backgroundColor: 'red'
    }
})