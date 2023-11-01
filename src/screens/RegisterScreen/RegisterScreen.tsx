import React from 'react'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StatusBar } from 'expo-status-bar';
import { useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';

import * as S from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { createUser, loginUser } from '../../services/users';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProp, AuthInternalProp } from '../../utils/types';

interface InputProps {
    email: string;
    password: string;
    name: string;
    age: number;
}

export default function RegisterScreen() {
    const userSchemaForm = yup.object({
        email: yup.string().email('E-mail inválido!').required('Insira o e-mail!'),
        password: yup.string().required('Insira a senha!').min(6, 'Senha menor que 6 dígitos!'),
        name: yup.string().required('Digite seu nome!').min(2, 'Insira um nome válido!'),
        age: yup.number().required('Digite sua idade!').min(16, 'Aplicativo apenas para maiorar de 16 anos!'),
    }).required();
    const resolver = { resolver: yupResolver(userSchemaForm) };
    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm<InputProps>(resolver);
    const navigation = useNavigation<AuthScreenProp & AuthInternalProp>();

    const handleRegisterPress = async(data: InputProps) => {
        const idUser = uuid.v4();
        const response = await createUser(data, idUser);
        if (response?.user) {
            return navigation.navigate('Home');
        }
    };

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return (
        <S.Container>
            <StatusBar style="dark"  />
            <S.KeyboardScrollView>
                <S.Gradient
                    colors={['#1A1A1A', '#252525']}
                    start={{ x: 0.6, y: 0.6 }}
                >
                    <S.ContainerAlign>
                        <S.LogoArea>
                            <S.LogoName>T</S.LogoName>
                        </S.LogoArea>
                        <Input
                            title="Digite seu nome"
                            name="name"
                            control={control}
                            errors={errors}
                            placeholder="Nome"
                        />
                        <Input
                            title="Digite a sua idade"
                            name="age"
                            control={control}
                            errors={errors}
                            placeholder="Idade"
                            keyboardType='numeric'
                        />
                        <Input
                            title="Digite o e-mail"
                            name="email"
                            control={control}
                            errors={errors}
                            placeholder="E-mail"
                        />
                        <Input
                            title="Digite a senha"
                            name="password"
                            control={control}
                            errors={errors}
                            placeholder="Senha"
                        />
                        <Button
                            title="Cadastrar"
                            onPress={handleSubmit(handleRegisterPress)}
                        />
                        <S.GoToLogin onPress={handleLoginPress}>
                            <S.LoginText>Voltar para o login</S.LoginText>
                        </S.GoToLogin>
                    </S.ContainerAlign>
                </S.Gradient>
            </S.KeyboardScrollView>
        </S.Container>
    );
}