import React from 'react';
import {Text, ScrollView, View, StyleSheet} from 'react-native';
import Product from './Product';

const Featured: React.FC = () => {
  return (
    <View>
      <Text style={styles.header}>Featured Products</Text>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 5,
    paddingRight: 5,
    height: 250,
    borderBottomWidth: 1,
    borderColor: '#cdcdcd',
  },
  header: {
    fontSize: 20,
    color: '#333',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default Featured;
