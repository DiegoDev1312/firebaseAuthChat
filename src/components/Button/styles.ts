import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 12px;
    height: 50px;
    width: 200px;
    margin-top: 16px;
`;

export const ButtonTitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSize(16)};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;
