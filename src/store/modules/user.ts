import {defineStore} from "pinia";
import {UserState} from "../types/types.ts";
import {LoginFormData,LoginResponseData,UserRegisterData} from "@/api/User/type.ts";
import {reqLogin,userRegister} from "@/api/User";
import {GET_TOKEN,SET_TOKEN} from "@/utils/common.ts";


const useUserStore = defineStore('user',{
    state: ():UserState => {
        return{
            token: GET_TOKEN(),
            userNickName: ''
        }

    },
    actions: {
        async userLogin(data: LoginFormData){
            // 登录请求
            let res:LoginResponseData = await reqLogin(data)
            // 判断code是否为成功
            if(res.code === 1){
                // 登录成功
                // 如果成功，那么保存从服务器拿来的token
                SET_TOKEN(res.data.token)
                this.token = res.data.token
                this.userNickName = res.data.userNickName
                return 'ok'
            }else{
                return Promise.reject(new Error(res.msg))
            }
        },

        async userRegister(userData:UserRegisterData){
            // 返回注册的结果
            let res = await userRegister(userData)
            // 成功从服务器返回结果
            if(res.code === 1){
                // 注册成功返回
                return 'success'
            }else{
                // 注册失败,返回原因
                return res.msg
            }

        }
    }

})

export default useUserStore;