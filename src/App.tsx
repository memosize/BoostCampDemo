import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import storageUtils from './utils/storageUtils'
import OnboardingScreen from './screen/OnboardingScreen'
import { navigationRef } from './RootNavigation'
export type RootStackParamList = {
    Home: undefined
    Login: { userId: string }
    OnBoarding: { programId: string }
}
const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
    const [token, setToken] = useState('')
    const getToken = async () => {
        const token = await storageUtils.getToken()

        if (token) {
            setToken(token)
        }
    }
    useEffect(() => {
        getToken()
    }, [])

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                {!token ? <Stack.Screen name="Home" component={HomeScreen} /> : <Stack.Screen name="Login" component={LoginScreen} />}
                <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
