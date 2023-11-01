import styled from 'styled-components/native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #000000;
`;

export const KeyboardScrollView = styled(KeyboardAwareScrollView).attrs({
    contentContainerStyle: {
        flexGrow: 1,
    },
})``;

export const Gradient = styled(LinearGradient)<LinearGradientProps>`
    flex: 1;
    background-color: #000000;
`;

export const LogoName = styled.Text`
    font-size: ${({ theme }) => theme.fontSize(50)};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogoArea = styled.View`
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 60px;
`;

export const ContainerAlign = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const RegisterButton = styled.TouchableOpacity``;

export const RegisterText = styled.Text`
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSize(18)};
    text-decoration: underline;
    margin-top: 16px;
    text-align: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#FFFFFF',
})`
    height: 40px;
    width: 100%;
    border: 1px solid #CCCCCC;
    padding-left: 12px;
    color: #FFFFFF;
    margin-bottom: 16px;
`;
