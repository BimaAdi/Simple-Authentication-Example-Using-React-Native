import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { AppLayout } from '../components/AppLayout';
import type { HomeTabProps } from '../types/navigation';

export const HomeScreen = ({ navigation }: HomeTabProps): JSX.Element => {
    return (
        <AppLayout>
            <View style={styles.mainView}>
                <Text style={styles.textGreeting}>Home</Text>
                <Button title='to Second' onPress={() => navigation.navigate("Second")}></Button>
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