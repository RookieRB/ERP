export const GET_TOKEN = () =>  {
    return localStorage.getItem("token")
}

export const SET_TOKEN = (token: string) => {
    localStorage.setItem("token", token)
}
// 获得当前时间
export const getCurrentTimeFormat = ():string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getDate();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
// 将number转化为string类型并每三位添加一个,坐区分
export const numberToString = (num:number):string => {
   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}