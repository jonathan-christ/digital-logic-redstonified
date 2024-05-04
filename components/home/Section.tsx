import React, { ReactNode } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import { Text, View } from '../Themed';

type SectionProps = {
    children: ReactNode
}

type ItemProps = {
    name: string,
    image?: object
}

type TextProps = {
    children: string
}

const Section = ({ children }: SectionProps) => {
    return (
        <ScrollView>
            <View>
                {children}
            </View>
        </ScrollView>
    )
}


Section.Item = (props: ItemProps) => {
    return (
        <View>
            <ImageBackground source={props.image}>
                <Text>{props.name}</Text>
            </ImageBackground>
        </View>
    )
}

Section.Title = ({children} : TextProps) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default Section

