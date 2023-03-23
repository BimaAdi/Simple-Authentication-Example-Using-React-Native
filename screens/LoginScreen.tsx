import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useSignedInStore } from '../stores/SignInState';

export const LoginScreen = (): JSX.Element => {
    const signedIn = useSignedInStore((state) => state.signedIn)

    const login = async () => {
        await Keychain.setGenericPassword('user', 'password')
        signedIn()
    }

    return (
        <View style={styles.mainView}>
            <Text style={styles.textGreeting}>Welcome Please Login</Text>
            <Button title='Login' onPress={() => login()}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textGreeting: {
        textAlign: 'center',
        marginBottom: 10,
    }
});