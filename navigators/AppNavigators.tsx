import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Keychain from 'react-native-keychain';
import type { RootStackParamList } from '../types/navigation';
import { DrawerNavigators } from './DrawerNavigators';
import { useSignedInStore } from '../stores/SignInState';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigators = (): JSX.Element => {
  const isSignedIn = useSignedInStore((state) => state.isSignedIn)
  const signedIn = useSignedInStore((state) => state.signedIn)
  const signedOut = useSignedInStore((state) => state.signedOut)

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token: false | Keychain.UserCredentials
      try {
        token = await Keychain.getGenericPassword()
        if (token === false) {
          signedOut()
        } else {
          signedIn()
        }
      } catch (e) {
        signedOut()
        console.error(e)
      }
    }
    bootstrapAsync()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <Stack.Screen name='HomeDrawer' component={DrawerNavigators} />
        ): (
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
