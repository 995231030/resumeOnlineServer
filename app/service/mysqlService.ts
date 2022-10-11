import { Service } from 'egg';

/**
 * mysql Service
 * mysql operations
 * 实际实现部分 增删改查
 */
export default class Test extends Service {
    // 注册
    public async userReg(req: object) {
        console.log(req)
        return {
            getVerificationCode: getVerificationCode()
        }
    }
    // 登录
    public async userLogin(req: object) {
        console.log(req)
        return {};
    }
}
function getVerificationCode() {
    return Math.random().toFixed(6).slice(-6)
}