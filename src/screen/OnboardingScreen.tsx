import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { getOnBoarding } from '../network/api'
type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>

export default function OnboardingScreen({ route, navigation }: Props) {
    const requestOnBoarding = async () => {
        console.log('route.params.programId', route.params.programId)
        let response = await getOnBoarding({ program_id: route.params.programId, week: 1, day: 1 })
        console.log('onboarding response ---', response)
        if (response?.data) {
            console.log('response.data', response.data)
        }
    }
    console.log('navigation', navigation)
    console.log('route', route)
    useEffect(() => {
        requestOnBoarding()
    }, [])
    return (
        <View>
            <Text>OnboardingScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
