import request from '@/utils/request';
import {UserLoginData, UserRegisterData} from "./type.ts";


enum API{
    LOGIN_URL = '/user/user/login',
    userRegister = '/user/user/test',
}

// 请求登录
export const reqLogin = (data:UserLoginData) => request.post(API.LOGIN_URL, data)

// 进行注册
export const userRegister = (userData:UserRegisterData) => request.post(API.userRegister, userData)