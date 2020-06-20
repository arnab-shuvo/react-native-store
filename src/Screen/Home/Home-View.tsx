import React from 'react';
import Header from '../../Components/Header/Header';
import Slider from './HeroSlider/Slider';
import Featured from './Featured/Featured';
import {ScrollView, StyleSheet, View} from 'react-native';

interface IProps {
  navigation: any;
  route?: any;
}
const HomeView: React.FC<IProps> = (props) => {
  return (
    <>
      <Header {...props} />
      <View style={styles.DefaultView}>
        <ScrollView style={styles.scrollView}>
          <Slider />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
          <Featured />
        </ScrollView>
      </View>
      <Header {...props} />
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    minHeight: '100%',
    // flexDirection: 'row',
  },
  DefaultView: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#000',
  },
  slider: {
    flex: 1,
    height: '100%',
    // backgroundColor: '#000',
  },
});
export default HomeView;
