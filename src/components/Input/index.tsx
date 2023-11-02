import React from "react";
import {
    Control,
    FieldError,
    FieldName,
    FieldValues,
    ErrorOption,
    Controller
} from "react-hook-form";

import * as S from './styles';

interface InputProps {
    title: string;
    placeholder: string;
    errors: any;
    control: any;
    name: FieldName<FieldValues>;
    keyboardType?: string;
    type?: string;
}

export default function Input({
    title,
    placeholder,
    ...rest
}: InputProps) {
    const getError = rest?.errors[rest.name]?.message;
    return (
        <S.InputArea>
            <S.InputTitle>{title}</S.InputTitle>
            <S.InputContainer error={getError}>
                <Controller
                    {...rest}
                    render={({ field: { onChange } }) => (
                        <S.Input
                            {...rest}
                            placeholder={placeholder}
                            onChangeText={onChange}
                            secureTextEntry={rest.type === 'password'}
                        />
                    )}
                />
            </S.InputContainer>
            {getError && (
                <S.ErrorText>{getError}</S.ErrorText>
            )}
        </S.InputArea>
    );
}
