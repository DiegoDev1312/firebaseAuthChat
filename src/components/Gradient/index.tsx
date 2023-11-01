import React from 'react';

import * as S from './styles';

interface GradientProps {
    children: JSX.Element;
}

export default function Gradient({ children }: GradientProps) {
    return (
        <S.Gradient>
            {children}
        </S.Gradient>
    );
}
