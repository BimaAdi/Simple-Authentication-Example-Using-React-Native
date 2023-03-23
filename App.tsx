/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Keychain from 'react-native-keychain';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import type { RootStackParamList } from './types/navigation';
import { useSignedInStore } from './stores/SignInState';
import { SecondScreen } from './screens/SecondScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
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
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Second' component={SecondScreen} />
          </>
        ): (
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
