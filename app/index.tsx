import images from '../assets/images.js';

import { Image } from 'expo-image';
import { StyleSheet, Pressable, ImageBackground } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';

export default function Page() {
  return (
    <Pressable
      style={styles.page}
      onPress={() => { router.navigate('(main)/home') }}
    >
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={images.titleScene}>
          <Image
            source={images.title}
            contentFit={'cover'}
            style={{ width: '70%', height: 150 }}
          />
          <Text>Tap to continue</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  page: {
    marginVertical: '10%',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative'
  }

});
