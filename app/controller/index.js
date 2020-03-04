const Controller = require('egg').Controller;
class Index extends Controller {
  async list() {
    // 调用service
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/index.tpl', { list: newsList });
  }
  async index() {
    // 调用service
    const ctx = this.ctx;
    var data = await ctx.service.index.index();
    data = JSON.parse((JSON.stringify(data)))
    await ctx.render('index.tpl', { data });
  }
}

module.exports = Index;