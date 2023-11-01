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
`;

export const HeaderArea = styled.View`
    width: 100%;
    flex-direction: row;
`;
