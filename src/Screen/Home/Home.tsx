import React from 'react';
import HomeView from './Home-View';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerView from '../../Components/Drawer/DrawerView';

const Drawer = createDrawerNavigator();
interface Iprops {
  route: any;
  navigation: any;
}

const Home: React.FC = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(dprops) => <DrawerView {...dprops} />}
        drawerPosition={'left'}
        drawerType="front"
        drawerStyle={{
          width: 290,
          height: '100%',
        }}>
        <Drawer.Screen name="Home" component={HomeView} />
      </Drawer.Navigator>
    </>
  );
};
export default Home;
