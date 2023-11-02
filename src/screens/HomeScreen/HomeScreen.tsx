import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'; 
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';

import * as S from './styles';
import Gradient from '../../components/Gradient';
import { RootState } from '../../redux/root-reducer';
import themes from '../../styles/themes';
import { signOutUser } from '../../services/users';
import { logoutUser } from '../../redux/user/actions';
import { useNavigation } from '@react-navigation/native';
import { AuthInternalProp } from '../../utils/types';

export default function HomeScreen() {
    const { currentUser } = useSelector((rootReducer: RootState) => rootReducer.userReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation<AuthInternalProp>();

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (!user) {
                const commonActionsInfo = {
                    index: 1,
                    routes: [
                        { name: 'Login' },
                    ],
                };
                navigation.dispatch(
                    CommonActions.reset(commonActionsInfo)
                );
                dispatch(logoutUser());
            }
        })
        return unsubscribe; 
    }, []);

    const handleLogoutPress = async () => {
        await signOutUser(currentUser.id);
    };

    return (
        <S.Container>
            <Gradient>
                <S.ContainerAlign>
                    <S.HeaderArea>
                        <S.UserInfo>
                            <S.UserPhoto
                                source={require('../../../assets/defaultUserPhoto.png')}
                                resizeMode="contain"
                            />
                            <S.UserNameAndEmail>
                                <S.UserName>
                                    {currentUser.name}
                                </S.UserName>
                                <S.UserName>
                                    {currentUser.email}
                                </S.UserName>
                            </S.UserNameAndEmail>
                        </S.UserInfo>
                        <S.QuitButton onPress={handleLogoutPress}>
                            <MaterialIcons
                                name="logout"
                                size={35}
                                color={themes.colors.orange}
                            />
                        </S.QuitButton>
                    </S.HeaderArea>
                </S.ContainerAlign>
            </Gradient>
        </S.Container>
    );
}