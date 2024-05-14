import { ReactNode } from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

import images from '@/assets/images';
import ItemList from './ItemList';
import React from 'react';

type SectionProps = {
    children: ReactNode
}

type TextProps = {
    children: string
}

const Section = ({ children }: SectionProps) => {
    return (
        <View style={styles.section}>
            {children}
        </View>
    )
}

Section.Title = ({ children }: TextProps) => {
    return (
        <View style={styles.titleSect}>
            <View style={styles.titleBar}></View>
            <View style={styles.titleCont}>
                <Text style={styles.title}>
                    {children}
                </Text>
            </View>
        </View>
    )
}

Section.ItemList = ItemList

export default Section

const styles = StyleSheet.create({
    section: {

        paddingHorizontal: 20,
        // backgroundColor: 'rgb(50,0,0)',
        height: 225,
        width: '100%',
        gap: 15,
        overflow: 'visible',
        borderBottomWidth: 4,
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    image: {

    },
    titleCont: {
        position: 'absolute',
        left: 0,
        // top: -20,
        // width: '75%',
        // padding: 10,
        // backgroundColor: 'rgb(50,0,0)',
        // borderWidth: 4,
        // borderBottomColor: 'rgb(100,0,0)',
        // borderLeftColor: 'rgb(125, 38,38)',
        // borderRightColor: 'rgb(125, 38,38)',
        // borderTopColor: 'rgb(255,81,81)'
    },
    titleSect: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'row',
        paddingBottom: 30,
    },
    titleBar: {
        flex: 1,
        height: 2,
        // borderWidth: 2,
        // borderTopColor: 'rgb(255,81,81)',
        // borderBottomColor: 'rgb(125, 38,38)',
    }
})