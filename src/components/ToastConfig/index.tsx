import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import themes from '../../styles/themes';

export default function ToastConfig() {
    const toastConfig = {
        success: (props: any): JSX.Element => (
          <BaseToast
            {...props}
            contentContainerStyle={{
                backgroundColor: themes.colors.green,
            }}
            text1Style={{
                fontSize: themes.fontSize(16),
                fontFamily: themes.fonts.bold,
            }}
          />
        ),
        error: (props: any): JSX.Element => (
            <ErrorToast
                {...props}
                contentContainerStyle={{
                    backgroundColor: themes.colors.red,
                }}
                text1Style={{
                    fontSize: themes.fontSize(16),
                    fontFamily: themes.fonts.bold,
                }}
            />
        ),
    }

    return toastConfig;
}