import React from 'react';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as Keychain from 'react-native-keychain';
import { useSignedInStore } from '../stores/SignInState';
import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';
import { DrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: any) => {
  const signedOut = useSignedInStore((state) => state.signedOut)

  const logout = async () => {
    try {
      await Keychain.resetGenericPassword()
      signedOut()
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => logout()} />
    </DrawerContentScrollView>
  );
}

export const DrawerNavigators = (): JSX.Element => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Second' component={SecondScreen} />
    </Drawer.Navigator>
  );
}
