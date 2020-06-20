import styled from 'styled-components';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export const SliderItem = styled(View)`
  flex: 1;
  justifycontent: 'center';
  alignitems: 'center';
  height: '100%';
  width: '100%';
`;
export const SliderContainer = styled(View)`
  height: '30%';
`;
export const SliderDot = styled(View)`
  backgroundcolor: 'rgba(0;0;0;.2)';
  width: 8;
  height: 8;
  borderradius: 4;
  marginleft: 3;
  marginright: 3;
  margintop: 3;
  marginbottom: 3;
`;
export const SliderActiveDot = styled(View)`
  flex: 1;
  justifycontent: center;
  alignitems: center;
  height: '100%';
  width: '100%';
`;

export const SliderImage = styled(Image)`
  flex: 1;
  alignself: 'center';
`;
export const SliderWrapper = styled(Swiper)`
  flex: 1;
`;
