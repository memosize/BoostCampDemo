import { createNavigationContainerRef, StackActions } from '@react-navigation/native'
import { RootStackParamList } from './App'

export const navigationRef = createNavigationContainerRef<RootStackParamList>()
type screen = keyof RootStackParamList
export function navigate(screenName: screen, params: RootStackParamList[screen]) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(screenName, params)
    }
}
export function push(params: { screenName: string; params: {} }) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(params.screenName, params))
    }
}
