import { Controller } from 'egg';
const ERRLIST = {
  ERR_NULL: "服务器给您返回了一个空数据,请检查参数或检查后端程序",
  ERR_TOPIC: ` topic:不存在`
}

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi();
  }
  // to ctx.service.*
  public async distributor() {
    const { ctx } = this;
    try {
      let reqParam = ctx.request.body
      if (reqParam.topic == undefined || !(ctx.service.mysqlService[reqParam.topic] instanceof Function)) {
        errCallback(reqParam.topic + ERRLIST.ERR_TOPIC)
        ctx.body.msg =
          ctx.body.ready = `0`
        return
      }
      ctx.body = await eval(`ctx.service.mysqlService.${reqParam.topic}(ctx.request.body)`)
      if (ctx.body == "" || null || {}) {
        errCallback(ERRLIST.ERR_NULL)
      }
      function errCallback(msg) {
        ctx.body = {}
        ctx.body.msg = msg
        ctx.body.ready = `0`
      }
      // let res = await this.app.mysql.query('select * from `userlist`');
    } catch (err) {
      console.log(err)
    }
  }
}

