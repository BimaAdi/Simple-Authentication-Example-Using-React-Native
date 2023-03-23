import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Second: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList>;