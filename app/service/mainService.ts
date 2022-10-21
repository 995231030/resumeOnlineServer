import { Service } from 'egg';

/**
 * mysql Service
 * mysql operations
 * 实际实现部分 增删改查
 */
export default class mainService extends Service {
    // 注册
    public async userReg(req: object) {
        console.log(req)
        return {
            getVerificationCode: getVerificationCode()
        }
    }
    // 登录  
    public async userLogin(req: object | any) {
        let res: any = await this.service.mysqlApi.query("userList", "userEmail", req.data.account)
        // let res: any = await this.app.mysql.query(`select * from userlist where userEmail = '${req.data.account}'`)
        if (res.length == 0) {
            res = "未注册"
        }
        console.log(res)
        return { res };
    }
}
function getVerificationCode() {
    return Math.random().toFixed(6).slice(-6)
}