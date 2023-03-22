import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import type { Props } from '../types/navigation';

export const HomeScreen = ({ navigation }: Props): JSX.Element => {

    return (
        <View style={styles.mainView}>
            <Text style={styles.textGreeting}>Home</Text>
            <Button title='logout' onPress={() => navigation.navigate("Login")}></Button>
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