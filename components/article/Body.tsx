import React, { ReactNode, ReactPortal } from 'react';
import { ScrollView, ImageBackground, Image } from 'react-native';
import { Text, View } from '../Themed';
import Header from './Header';

type BodyProps = {
    children: ReactNode
}

type ImageProps = {
    image: object
}

const Body = ({ children }: BodyProps) => {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}

export default Body

