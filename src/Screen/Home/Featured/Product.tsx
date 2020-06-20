import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import EntypIcon from 'react-native-vector-icons/Entypo';

const Product: React.FC = () => {
  return (
    <View style={styles.slide}>
      <Image source={require('../../../Image/1.png')} style={styles.proImage} />
      <View style={styles.producthead}>
        <Text style={styles.productheadText}>Black Jacket</Text>
      </View>
      <View style={styles.des}>
        <View style={styles.desLeft}>
          <Text style={styles.price}>$500.00 excl tax</Text>
          <View style={styles.rating}>
            <EntypIcon name="star" color="#FFDF00" />
            <EntypIcon name="star" color="#FFDF00" />
            <EntypIcon name="star" color="#FFDF00" />
            <EntypIcon name="star" color="#FFDF00" />
            <EntypIcon name="star" color="#FFDF00" />
          </View>
        </View>
        <View style={styles.desRight}>
          <Image
            style={styles.wishImage}
            source={require('../../../Image/heart.png')}
            resizeMethod={'scale'}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 180,
    marginRight: 10,
  },
  proImage: {
    maxWidth: '100%',
    height: 150,
  },
  wishImage: {
    maxWidth: '100%',
  },
  producthead: {
    flex: 1,
    width: '100%',
    paddingTop: 5,
  },
  productheadText: {
    textAlign: 'left',
    fontSize: 15,
  },
  des: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  desLeft: {
    flex: 0.85,
  },
  desRight: {
    flex: 0.15,
  },
  price: {
    fontSize: 12,
    color: 'red',
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Product;
