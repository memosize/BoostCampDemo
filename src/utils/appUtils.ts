import { Dimensions } from 'react-native'

export const appUtils = {
    getScreenWidth(): number {
        return Dimensions.get('window').width
    },
    getScreenHeight(): number {
        return Dimensions.get('window').height
    }
}
