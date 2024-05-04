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
        <View>
            <ImageBackground style={styles.view} source={image}>
                {children}
            </ImageBackground>
        </View>
    )
}

Header.Title = ({ children }: TextProp) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

Header.Category = ({ children }: TextProp) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

Header.Image = (props: ImageProps) => {
    return (
        <Image style={styles.image} source={props.image} />
    )
}

export default Header

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',

    },
    image: {
        height: 500,
        width: 500,
        backgroundColor: 'red'
    },
})