import React from 'react';

import * as S from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {

    return (
        <S.Button onPress={onPress}>
            <S.ButtonTitle>{title}</S.ButtonTitle>
        </S.Button>
    );
}
