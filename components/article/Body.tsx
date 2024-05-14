import React, { ReactNode, ReactPortal } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

type BodyProps = {
    children: ReactNode
}

type ContentProps = {
    image?: object,
    title: string,
    children: ReactNode
}

type ImageProps = {
    image: object
}

const Body = ({ children }: BodyProps) => {
    return (
        <View style={styles.view}>
            {children}
        </View>
    )
}

Body.Content = (props: ContentProps) => {
    return (
        <View style={styles.content}>
            <View style={styles.title}>
                <Text style={{ fontSize: 20 }}>{props.title}</Text>
            </View>
            {props.children}
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    view: {
        marginTop: 40,
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'column',
        gap: 40
    },
    title: {
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        gap: 10
    }
})

