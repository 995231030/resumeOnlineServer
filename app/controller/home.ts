import { Controller } from 'egg';
const ERRLIST = {
  ERR_NULL: "The server returned an empty data to you. If this is not what the front-end expected, please check the parameters or back-end programs",
  ERR_TOPIC: `:non-existent topic`
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
      if (reqParam.topic == undefined || !(ctx.service.mainService[reqParam.topic] instanceof Function)) {
        errCallback(reqParam.topic + ERRLIST.ERR_TOPIC)
        return
      }
      ctx.body = await eval(`ctx.service.mainService.${reqParam.topic}(ctx.request.body)`)
      if (ctx.body.ready == undefined) {
        ctx.body.ready = 1
      }
      if (ctx.body == "" || ctx.body == null || Object.keys(ctx.body).length - 1 == 0) {
        errCallback(ERRLIST.ERR_NULL)
      }
      function errCallback(msg: string) {
        ctx.body = {
          msg: msg,
          ready: 0
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}

