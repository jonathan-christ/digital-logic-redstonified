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
        <View>
            <Text>{props.title}</Text>
            {props.children}
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        gap: 20
    }
})

