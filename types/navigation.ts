import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
    Login: undefined;
    HomeTab: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export type HomeTabParamList = {
    Home: undefined;
    Second: undefined;
}

export type HomeTabProps = BottomTabScreenProps<HomeTabParamList>;
