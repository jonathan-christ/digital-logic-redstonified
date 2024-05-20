import React, { ReactNode } from 'react';
import { Button, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../Themed';
import { Link } from 'expo-router';

import Colors from '@/constants/Colors';
import images from '@/assets/images';

type ItemListProps = {
    children: ReactNode
}

type ItemProps = {
    name: string,
    category: string,
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
    const textHL = { color: 'rgb(255,189,81)' }
    return (
        <Link
            style={{ width: '100%' }}
            href={{ pathname: '/(main)/articles/[article]', params: { category: props.category, article: props.name } }}
            asChild
        >
            <Pressable>
                {({ pressed }) => (
                    <View style={styles.item}>
                        <View style={[styles.imgCont, (pressed ? Colors.borderHL : {})]}>
                            <Image style={styles.image} source={props.image ?? images.title} />
                        </View>
                        <Text style={[styles.title, (pressed ? textHL : {})]}>{props.name}</Text>
                    </View>
                )}
            </Pressable>
        </Link>
    )
}


export default SearchList

const styles = StyleSheet.create({
    view: {
        marginTop: -15,
        paddingHorizontal: 10,
    },
    imgCont: {
        height: 75,
        width: 75,

        justifyContent: 'center',
        alignItems: 'center',

        ...Colors.border
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: 'rgb(50,0,0)',
        gap: 0,
    },
    item: {
        width: '100%',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        padding: 15,

        // justifyContent: 'center',
        alignItems: 'center',

        gap: 20,
    },
    title: {
        fontSize: 16,
    },
    image: {
        borderRadius: 15,
        height: 50,
        width: 50,
        objectFit: 'contain',
        backgroundColor: ''
    }
})