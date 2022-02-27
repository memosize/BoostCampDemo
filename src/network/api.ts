import { onboardingReq } from './api'
import { request } from './network'
export interface IResponse {
    code: string
    message: string
    data: {}
}
export interface loginInfo {
    name: string
    age: number
    account: {
        phone: number
        token: string
    }
}
export interface LoginRes extends IResponse {
    data: loginInfo
}
export interface ProgramRes {
    data: Datum[]
}
export interface Datum {
    id: string
    title: string
    tagline: string
    banner: null | string
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
export type onboardingReq = {
    program_id: string
    week?: number
    day?: number
}
type onboardingReqKey = keyof onboardingReq
export const getProgramList = (): Promise<ProgramRes> => {
    return request('/list')
}
export const getOnBoarding = (params: onboardingReq): Promise<any> => {
    return request<onboardingReq>('/workout/get', {}, params)
}
