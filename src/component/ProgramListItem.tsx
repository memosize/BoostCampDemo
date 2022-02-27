export interface ProgramRes {
    id: string
    title: string
    tagline: string
    banner: string | null
    difficulty: string
    equipments: string
    weekdays: number[]
    weeksCount: number
    instructor?: Instructor
}

export interface Instructor {
    id: string
    name: string
}

export interface ItemProps {
    navTo: () => void
}

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { appUtils } from '../utils/appUtils'

const ProgramListItem = (props: ProgramRes & ItemProps) => {
    const banner =
        props.banner ?? 'https://s3.amazonaws.com/staging.boostcamp/images/program/Td7l1ih0cKSENiSSHx7LWB9Tir43/7cd80e2e-2e3d-47fa-835a-9cae62bb72c5.jpg'

    console.log('banner', banner)

    const screenWidth = appUtils.getScreenWidth()
    const bannerHeight = (screenWidth * 9) / 21

    return (
        <TouchableOpacity onPress={() => props.navTo()}>
            <View style={{ width: screenWidth, marginTop: 20, alignItems: 'center' }}>
                <View style={{ width: screenWidth - 20, backgroundColor: 'white', borderRadius: 10 }}>
                    <Image
                        source={{ uri: banner }}
                        style={{ width: screenWidth - 20, height: bannerHeight, borderRadius: 4, alignItems: 'center' }}
                        resizeMode={'cover'}
                    />
                    <View style={{ width: screenWidth - 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.title}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.instructor?.name}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '400', marginTop: 20 }}>{`tabline: ${props.tagline}`}</Text>
                    </View>
                    <View style={{ width: screenWidth, flexDirection: 'row', marginLeft: 10, marginTop: 20, marginBottom: 20 }}>
                        <View style={{ borderRadius: 15, backgroundColor: 'gray', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ paddingHorizontal: 10, paddingVertical: 5 }}>{props.difficulty}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProgramListItem
