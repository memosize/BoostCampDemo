import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getProgramList, Datum } from '../network/api'
import ProgramListItem from '../component/ProgramListItem'
import { navigate } from '../RootNavigation'
const OverviewScreen = () => {
    const [programList, setProgramList] = useState<Datum[]>([])
    const requestProgramList = async () => {
        let response = await getProgramList()
        if (response?.data) {
            setProgramList(response.data)
        }
    }
    useEffect(() => {
        requestProgramList()
    }, [])
    return (
        <View>
            {programList &&
                programList.map(item => {
                    return <ProgramListItem {...item} key={item.id} navTo={() => navigate('OnBoarding', { programId: item.id })} />
                })}
        </View>
    )
}

export default OverviewScreen
