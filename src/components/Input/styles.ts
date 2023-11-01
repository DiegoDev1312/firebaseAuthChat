import styled, { css } from "styled-components/native";
import themes from "../../styles/themes";

interface InputAreaProps {
    error?: string;
}

export const InputArea = styled.View`
    width: 100%;
    margin-bottom: 12px;
`;

export const InputContainer = styled.View<InputAreaProps>`
    width: 100%;
    height: 50px;
    padding-left: 12px;
    align-items: center;
    flex-direction: row;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.black};
    ${({ error }) => error
        ? css`border: 1px solid #FF0000` : css`border: 1px solid #CCCCCC`};
`;

export const ErrorText = styled.Text`
    color: ${({ theme }) => theme.colors.red};  
`;

export const InputTitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSize(16)};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 6px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: themes.colors.white,
})`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
`;
