import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import type { Props } from '../types/navigation';

export const LoginScreen = ({ navigation }: Props): JSX.Element => {

    return (
        <View style={styles.mainView}>
            <Text style={styles.textGreeting}>Welcome Please Login</Text>
            <Button title='Login' onPress={() => navigation.navigate('Home')}></Button>
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