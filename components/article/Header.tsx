import React, { ReactNode, ReactPortal } from 'react';
import { ScrollView, ImageBackground, Image } from 'react-native';
import { Text, View } from '../Themed';

type HeaderProps = {
    children: ReactNode,
    image?: object
}

type TextProp = {
    children: string
}

const Header = ({ children, image }: HeaderProps) => {
    return (
        <View>
            <ImageBackground source={image}>
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

export default Header

