import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: black;
`;

export const UserPhoto = styled.Image`
    border-radius: 20px;
    height: 40px;
    width: 40px;
    margin-right: 12px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize(16)};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerAlign = styled.View`
    width: 90%;
    align-self: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserNameAndEmail = styled.View`
    margin-left: 4px;
`;

export const HeaderArea = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: 25px;
    justify-content: space-between;
    align-items: center;
`;

export const QuitButton = styled.TouchableOpacity``;
