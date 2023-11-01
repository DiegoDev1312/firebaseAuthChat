import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

interface LoginUser {
    password: string;
    email: string;
}

export interface RegisterInfo {
    name: string;
    age: number;
}

export async function createUser(user: RegisterInfo & LoginUser, id: string | number[]) {
    return await auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(async (response) => {
            const bodyCreate = {
                id: response.user.uid,
                name: user.name,
                age: user.age,
                email: user.email,
                online: true,
                photo: '',
                description: '',
            };
            await firestore()
                .collection('users')
                .doc(response.user.uid)
                .set(bodyCreate)
            return response;
        })
}

export async function loginUser(user: LoginUser) {
    return await auth().signInWithEmailAndPassword(user.email, user.password)
        .then((response) => {
            console.log(response);
            return response;
        });
}

export async function getUserInfo(idUser: string) {
    console.log('idUser', idUser);
    const userInfo = await firestore().collection('users').doc(idUser).get();
    return userInfo.data();
}
