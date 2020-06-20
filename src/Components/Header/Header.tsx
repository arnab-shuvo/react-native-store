import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, Image, TouchableOpacity} from 'react-native';
import {HeaderWrap, HeaderGrid} from './styled';

interface IProps {
  route?: any;
  navigation: any;
}
const Header: React.FC<IProps> = (props) => {
  return (
    <HeaderWrap style={{flexDirection: 'row'}}>
      <HeaderGrid size={0.1}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Image
            source={require('../../Image/menu.png')}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </TouchableOpacity>
      </HeaderGrid>
      <HeaderGrid size={0.7}>
        <Image
          source={require('../../Image/harrier.png')}
          style={{width: 70, height: 70, flex: 1, alignSelf: 'center'}}
          resizeMode="contain"
        />
      </HeaderGrid>
      <HeaderGrid size={0.1}>
        <Image
          source={require('../../Image/shopping_cart.png')}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </HeaderGrid>
    </HeaderWrap>
  );
};

export default Header;
