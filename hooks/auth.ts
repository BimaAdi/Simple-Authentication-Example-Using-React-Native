import * as Keychain from 'react-native-keychain';
import { useSignedInStore } from '../stores/SignInState';

export const useLogin = () => {
    const signedIn = useSignedInStore((state) => state.signedIn)

    const login = async () => {
        try {
            await Keychain.setGenericPassword('user', 'password')
            signedIn()
        } catch (error) {
            console.error(error)
        }
    }

    return { login }
}

export const useLogout = () => {
    const signedOut = useSignedInStore((state) => state.signedOut)

    const logout = async () => {
        try {
            await Keychain.resetGenericPassword()
            signedOut()
        } catch (error) {
            console.error(error)
        }
    }

    return { logout }
}
