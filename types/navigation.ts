import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerScreenProps } from '@react-navigation/drawer';

export type RootStackParamList = {
    Login: undefined;
    HomeDrawer: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export type DrawerParamList = {
    Home: undefined;
    Second: undefined;
}

export type DrawerProps = DrawerScreenProps<DrawerParamList>;