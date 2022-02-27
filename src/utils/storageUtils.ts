import AsyncStorage from '@react-native-async-storage/async-storage'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'
interface User extends FirebaseAuthTypes.User {
    token: string
}
 class storageUtils {
    static token: string
    async saveUserData(user: User) {
        try {
            const jsonValue = JSON.stringify(user)
            console.log('jsonValue', jsonValue)
            await AsyncStorage.setItem('user', jsonValue)
        } catch (e) {
            console.log('save error ', e)
            // saving error
        }
    }
    async getUserData(user: string): Promise<User | null | undefined> {
        try {
            const jsonValue = await AsyncStorage.getItem(user)

            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            console.log('save error ', e)
            // saving error
        }
    }
    async saveToken(token: string) {
        try {
            storageUtils.token = token
            await AsyncStorage.setItem('token', token)
        } catch (e) {
            console.log('save error ', e)
            // saving error
        }
    }
    getTokenSync() {
        return storageUtils.token
    }
    async getToken() {
        try {
            return await AsyncStorage.getItem('token')
        } catch (e) {
            console.log('save error ', e)
            // saving error
        }
    }
}
export default new storageUtils()
