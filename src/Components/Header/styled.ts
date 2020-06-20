import styled from 'styled-components';
import {View} from 'react-native';

export const HeaderWrap = styled(View)`
  background: #fff;
  padding: 10px;
`;

type grid = {
  size: number;
  background?: string;
};
export const HeaderGrid = styled(View)`
  flex: ${(props: grid) => props.size};
  background-color: ${(props: grid) => props.background ?? 'transparent'};
`;
