import React, { ReactNode, ReactPortal } from 'react';
import { ScrollView, ImageBackground, Image } from 'react-native';
import { Text, View } from '../Themed';
import Header from './Header';

/*
Obtaining [Item Name]
Methods to obtain the item (mining, crafting, trading, etc.).
Properties
Physical characteristics and stack information.
Usage
How the item is used in redstone circuits and crafting recipes.
Mechanics
Detailed explanation of how the item functions within a circuit.
Technical Information
Data values and block states specific to the item.
Tutorials
Step-by-step guides and examples using the item in circuits.
Trivia
Fun facts and lesser-known details about the item.
Gallery
Visuals showcasing the item in action.
External Links
Additional resources for further learning.
*/

type BodyProps = {
    children: ReactNode
}

type ContentProps = {
    image?: object,
    title: string,
    children: string
}

type ImageProps = {
    image: object
}

const Body = ({ children }: BodyProps) => {
    return (
        <View>
            {children}
        </View>
    )
}

Body.Content = (props: ContentProps) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>
                {props.children}
            </Text>
        </View>
    )
}

export default Body

