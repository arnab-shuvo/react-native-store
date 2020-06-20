import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

interface Iprops {
  route?: any;
  navigation: any;
}
const DrawerView: React.FC<Iprops> = (props) => {
  const fingerPrintIcon = (
    <IonIcon name="md-finger-print" size={25} color={'red'} />
  );
  return (
    <>
      <DrawerContentScrollView>
        <DrawerItem
          label={'markAttendance.header'}
          onPress={() => props.navigation.navigate('Mark Attendance')}
          activeTintColor="white"
          icon={() => fingerPrintIcon}
        />
      </DrawerContentScrollView>
    </>
  );
};

export default DrawerView;
