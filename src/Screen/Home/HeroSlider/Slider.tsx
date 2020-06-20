import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
const Slider: React.FC = () => {
  return (
    <View
      style={{
        height: 150,
        flex: 1,
      }}>
      <Swiper
        dot={
          <View
            style={{
              backgroundColor: '#fff',
              borderColor: '#000',
              borderWidth: 1,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#333',
              borderColor: '#fff',
              borderWidth: 1,
              width: 10,
              height: 10,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        showsButtons={false}>
        <View style={styles.slide}>
          <Image
            source={require('../../../Image/5.png')}
            style={{
              flex: 1,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../Image/4.png')}
            style={{
              flex: 1,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
        </View>
      </Swiper>
    </View>
  );
};
export default Slider;
