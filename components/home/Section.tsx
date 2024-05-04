import { ReactNode } from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

import images from '@/assets/images';
import ItemList from './ItemList';

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
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

Section.ItemList = ItemList

export default Section

const styles = StyleSheet.create({
    section: {
        height: 200,
        width: '100%',
        gap: 15,
        overflow: 'hidden'
    },
    title: {
        fontSize: 20,
    },
    image: {

    }
})