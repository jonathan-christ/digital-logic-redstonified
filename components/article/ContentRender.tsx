import React from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, View } from '@/components/Themed';

const { width } = Dimensions.get('window')
const ContentRender = (props: { data: any, idx?: number }) => {
    const { data, idx } = props
    return (
        <View key={idx + data}>
            {typeof data === "string" ? // image check
                <View style={styles.bullet}>
                    <Text>{data}</Text>
                </View> :
                <View style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
                    <Image style={{ width: '100%', resizeMode: 'contain', height: width * 0.5 }} source={data.img} />
                    <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, marginBottom: 10, marginHorizontal: 1, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
                        <Text>{data.text}</Text>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    bullet: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 5

    }
})

export default ContentRender


