import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { useLogout } from '../hooks/auth';

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export const AppLayout = ({ children }: Props) => {
    const { logout } = useLogout()

    return (
        <View style={styles.bodyView}>
            <View style={styles.mainView}>
                {children}
            </View>
            <View style={styles.footer}>
                <Button title='logout' onPress={() => logout()}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyView: {
        height: '100%',
        justifyContent: 'space-between',
    },
    mainView: {
        flex: 9
    },
    footer: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end'
    }
});