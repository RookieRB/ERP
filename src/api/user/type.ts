// 用户登录
export interface UserLoginData{
    userName: string,
    password: string,
}
// 用户注册
export interface UserRegisterData{
    userName: string,
    password: string,
    email: string,
    verifiedCode: string,
}

// 后端返回来的结果
export interface LoginResponseData{
    code: number,
    msg: string,
    data: LoginResponseDataInfo
}
// 后端返回data中的数据结构
export interface LoginResponseDataInfo{
    id: number,
    token: string,
    userNickName: string,
}