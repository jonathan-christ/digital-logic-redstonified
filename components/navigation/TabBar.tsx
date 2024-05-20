import React from 'react';

import { Pressable, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import NavigationIcon from './NavigationIcon';
import { View } from '../Themed';

import images from '@/assets/images';
import Colors from '@/constants/Colors';


const { width } = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <ImageBackground style={styles.mainContainer} source={images.bg_heading}>
      <View style={{ flexDirection: 'row', }}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
          const color = isFocused ? 'rgba(175,0,0,0.2)' : 'rgba(0,0,0,0)'
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };


          return (
            <View key={index} style={[styles.mainItemContainer, { borderRightWidth: label == "notes" ? 3 : 0 }]}>
              <Pressable onPress={onPress} style={[styles.containerBorder, (isFocused? styles.active : styles.inactive), { backgroundColor: color }]}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 15 }}>
                  <NavigationIcon route={label} isFocused={isFocused} />
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerBorder: {
    top: 0,
    width: '100%',
    borderWidth: 0,
    borderTopWidth: 4,
    borderBottomColor: 'transparent'
  },
  mainContainer: {
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    borderBottomColor: 'rgb(120,5,5)',
    borderLeftColor: 'rgb(155, 15,15)',
    borderRightColor: 'rgb(155, 15,15)',
    borderTopColor: 'rgb(220,40,40)',
  },
  inactive: {
    borderTopColor: 'rgb(20,0,0)',
  }
})


export default TabBar; 