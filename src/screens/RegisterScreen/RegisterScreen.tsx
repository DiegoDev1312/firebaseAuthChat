import React from 'react'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useToast } from "react-native-toast-notifications";
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { createUser } from '../../services/users';
import { useNavigation } from '@react-navigation/native';
import { AuthScreenProp, AuthInternalProp, toastSuccessOption, toastErrorOptions } from '../../utils/types';
import Gradient from '../../components/Gradient';
import { actionLoginUser } from '../../redux/user/actions';

interface InputProps {
    email: string;
    password: string;
    name: string;
    age: number;
}

export default function RegisterScreen() {
    const toast = useToast();
    const userSchemaForm = yup.object({
        email: yup.string().email('E-mail inválido!').required('Insira o e-mail!'),
        password: yup.string().required('Insira a senha!').min(6, 'Senha menor que 6 dígitos!'),
        name: yup.string().required('Digite seu nome!').min(2, 'Insira um nome válido!'),
        age: yup.number().required('Digite sua idade!').min(16, 'Aplicativo apenas para maiores de 16 anos!').typeError('Digite sua idade'),
    }).required();
    const resolver = { resolver: yupResolver(userSchemaForm) };
    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm<InputProps>(resolver);
    const navigation = useNavigation<AuthScreenProp & AuthInternalProp>();
    const dispatch = useDispatch();

    const handleRegisterPress = async(data: InputProps) => {
        const commonActionsInfo = {
            index: 1,
            routes: [
                { name: 'Home' },
            ],
        };
        const response = await createUser(data);
        if (response?.user) {
            toast.show('Usuário criado com sucesso', toastSuccessOption);
            dispatch(actionLoginUser(response.user));
            return navigation.dispatch(
                CommonActions.reset(commonActionsInfo)
            );
        }
        if (response === 'auth/email-already-in-use') {
            return toast.show('E-mail já está em uso!', toastErrorOptions);
        }
        toast.show('Ocorreu um erro no cadastro!', toastErrorOptions);
    };

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    return (
        <S.Container>
            <S.KeyboardScrollView>
                <Gradient>
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
                            type="password"
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
                </Gradient>
            </S.KeyboardScrollView>
        </S.Container>
    );
}
