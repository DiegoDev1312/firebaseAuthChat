import React from 'react'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { getUserInfo, loginUser } from '../../services/users';
import { AuthScreenProp, AuthInternalProp } from '../../utils/types';
import { actionLoginUser } from '../../redux/user/actions';
import Gradient from '../../components/Gradient';

interface InputProps {
    email: string;
    password: string;
}

export default function LoginScreen() {
    const userSchemaForm = yup.object({
        email: yup.string().email('E-mail inválido!').required('Insira o e-mail!'),
        password: yup.string().required('Insira a senha!').min(6, 'Senha menor que 6 dígitos!'),
    }).required();
    const resolver = { resolver: yupResolver(userSchemaForm) };
    const {
        formState: { errors },
        control,
        handleSubmit,
    } = useForm<InputProps>(resolver);
    const navigation = useNavigation<AuthScreenProp & AuthInternalProp>();
    const dispatch = useDispatch();

    const handleLoginPress = async(data: InputProps) => {
        const response = await loginUser(data);
        if (response.user) {
            const userInfo = await getUserInfo(response.user.uid);
            dispatch(actionLoginUser(userInfo));
            navigation.navigate('Home');
        }
    };

    const handleRegisterPress = () => {
        navigation.navigate('Register');
    }

    return (
        <S.Container>
            <S.KeyboardScrollView>
                <Gradient>
                    <S.ContainerAlign>
                        <S.LogoArea>
                            <S.LogoName>T</S.LogoName>
                        </S.LogoArea>
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
                            placeholder="Password"
                        />
                        <Button
                            title="Entrar"
                            onPress={handleSubmit(handleLoginPress)}
                        />
                        <S.RegisterButton onPress={handleRegisterPress}>
                            <S.RegisterText>Cadastrar-se</S.RegisterText>
                        </S.RegisterButton>
                    </S.ContainerAlign>
                </Gradient>
            </S.KeyboardScrollView>
        </S.Container>
    );
}
