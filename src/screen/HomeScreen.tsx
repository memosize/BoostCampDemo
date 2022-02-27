import { View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import OverviewScreen from './OverviewScreen'
import WorkoutScreen from './WorkoutScreen'

const Tab = createMaterialTopTabNavigator()

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen name="OVERVIEW" component={OverviewScreen} />
                <Tab.Screen name="WORKOUTS" component={WorkoutScreen} />
            </Tab.Navigator>
        </View>
    )
}

export default HomeScreen
