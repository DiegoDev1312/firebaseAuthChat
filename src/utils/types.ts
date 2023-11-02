import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackInternalList } from '../routes';
import { ToastOptions } from 'react-native-toast-notifications';

export type AuthScreenProp = NativeStackNavigationProp<RootStackParamList>;
export type AuthInternalProp = NativeStackNavigationProp<RootStackInternalList>;
export const toastSuccessOption: ToastOptions = {
    type: 'success',
    placement: 'top',
    style: {
        marginTop: 60,
    },
};
export const toastErrorOptions: ToastOptions = {
    type: 'danger',
    placement: 'top',
    style: {
        marginTop: 60,
    },
};

