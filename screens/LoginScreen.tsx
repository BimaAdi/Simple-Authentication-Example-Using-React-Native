import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { useLogin } from '../hooks/auth';

export const LoginScreen = (): JSX.Element => {
    const { login } = useLogin()
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