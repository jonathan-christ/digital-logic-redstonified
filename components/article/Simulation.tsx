import React, { useState } from 'react';
import { Pressable, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { View, Text } from '../Themed'
import imgs from '@/assets/images';

type ButtonProps = {
  name: string,
  state: string,
  onPress: any
}

type SimulationProps = {
  data: string[]
}

const { width } = Dimensions.get('window')

const ButtonRender = ({ name, state, onPress }: ButtonProps) => {
  const imgSrc = state === 't' ? imgs.btn_on : imgs.btn_off
  const btnStyle = state === 't' ? { color: 'black' } : {}
  return (
    <Pressable onPress={onPress} >
      <View style={{borderWidth: 2, borderColor: 'white', borderRadius: 5}}>
        <ImageBackground style={styles.button} source={imgSrc}>
          <Text style={[styles.buttonTxt, btnStyle]}>{name}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}

export const Simulation = ({ data }: SimulationProps) => {
  const [switchState, setSwitchState] = useState<{ switch1: string, switch2: string }>({ switch1: 'f', switch2: 'f' });
  const inputNum = Math.log2(data.length == 1 ? 2 : data.length)
  const images: { [key: string]: any } = {};

  (inputNum === 2 ? ['ff', 'ft', 'tf', 'tt'] : ['f', 't']).
    forEach((el, idx) => {
      images[el] = data[idx]
    })

  const getCurrentImage = () => {
    const key = `${switchState.switch1}${inputNum === 2 ? switchState.switch2 : ''}`;
    return images[key];
  };

  const handleSwitch1Click = () => {
    setSwitchState(prevState => ({ ...prevState, switch1: prevState.switch1 === 'f' ? 't' : 'f' }));
  };

  const handleSwitch2Click = () => {
    setSwitchState(prevState => ({ ...prevState, switch2: prevState.switch2 === 'f' ? 't' : 'f' }));
  };

  const handleFns: any[] = [
    handleSwitch1Click,
    handleSwitch2Click
  ]

  const states: string[] = [
    switchState.switch1,
    switchState.switch2
  ]

  const names: string[] = [
    "A",
    "B"
  ]

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: width / 2 }}>
        {Array(inputNum)
          .fill("")
          .map((_, idx) => (
            <ButtonRender
              key={idx}
              name={names[idx]}
              state={states[idx]}
              onPress={handleFns[idx]}
            />
          ))}
      </View>
      <View style={styles.imgContainer}>
        <Image source={getCurrentImage()} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row'
  },
  image: {
    width: 'auto',
    flex: 1,
    objectFit: 'scale-down',
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    width: 75,
    height: 75,
    paddingVertical: 10,
    backgroundColor: 'red',
  },
  buttonTxt: {
    fontFamily: 'Minecraft-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  imgContainer: {
    height: width / 2,
    width: width / 1.55,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
  }
});
