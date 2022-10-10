import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async mysqlTest() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    try {
      let res = await this.app.mysql.query('select * from `userlist`');
      ctx.body = res
    } catch (err) {
      // console.log(err)
    }
  }
}
