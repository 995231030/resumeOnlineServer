import { Service } from 'egg';

/**
 * mysql mysqlApi
 *
 * mysql命令封装
 */
export default class mysqlApi extends Service {
    public async query(tableName: string, fieldName: string, value: string | any) {
        let res = await this.app.mysql.query(`select * from ${tableName} where ${fieldName} = '${value}'`)
        return res[0]
    }
    public async queryList(tableName: string, fieldName: string, value: string | any) {
        let res = await this.app.mysql.query(`select * from ${tableName} where ${fieldName} = '${value}'`)
        return res
    }
}