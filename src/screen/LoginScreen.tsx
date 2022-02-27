import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appUtils } from '../utils/appUtils'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import storageUtils  from '../utils/storageUtils'

const LoginScreen = () => {
    const screenWidth = appUtils.getScreenWidth()
    const [email, setEmail] = useState('jane.doe@example.com')
    const [password, setPassword] = useState('SuperSecretPassword!')
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber // unsubscribe on unmount
    }, [])
    interface User extends FirebaseAuthTypes.User {
        token: string
    }
    function onAuthStateChanged(user: User) {
        console.log('user', user)
        if (user) {
            user.getIdToken().then(function (idToken) {
                console.log('idToken', idToken)
                let userWithToken = user
                userWithToken.token = idToken
                storageUtils.saveUserData(user)
                storageUtils.saveToken(idToken)
            })
        }
    }
    /**
     *
     * @param email  jane.doe@example.com
     * @param password SuperSecretPassword!
     */
    function login(email: string, password: string) {
        console.log('login----')
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('User account created & signed in!')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!')
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!')
                }

                console.error(error)
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', left: 0, bottom: 60, width: screenWidth, height: 300, alignItems: 'center' }}>
                <TextInput
                    style={{ height: 40, width: screenWidth - 60, borderRadius: 7, borderColor: 'gray', borderWidth: 1, paddingLeft: 20 }}
                    placeholder={'please input email'}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={{ height: 40, width: screenWidth - 60, borderRadius: 7, borderColor: 'gray', borderWidth: 1, marginTop: 40, paddingLeft: 20 }}
                    placeholder="please input password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => login(email, password)}>
                    <View
                        style={{
                            width: screenWidth - 40,
                            height: 50,
                            borderRadius: 6,
                            backgroundColor: '#2D9CDB',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 60
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen
