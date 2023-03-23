import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { AppLayout } from '../components/AppLayout';
import type { DrawerProps } from '../types/navigation';

export const SecondScreen = ({ navigation }: DrawerProps): JSX.Element => {

    return (
        <AppLayout>
            <View style={styles.mainView}>
                <Text style={styles.textGreeting}>Second Screen</Text>
                <Button title='to Home Screen' onPress={() => navigation.navigate("Home")}></Button>
            </View>
        </AppLayout>
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