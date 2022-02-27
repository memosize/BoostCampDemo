import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { FC } from 'react'
export interface IProps {
    items: string[]
}
const ScrollTab: FC<IProps> = props => {
    const { items, children } = props
    return (
        <View>
            <View style={{ flexDirection: 'row', height: 50 }}>
                {items.map(item => {
                    return (
                        <TouchableWithoutFeedback key={`item-${item}`}>
                            <View style={{ flex: 1, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </View>
            {children}
        </View>
    )
}

export default ScrollTab
