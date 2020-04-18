const Controller = require("egg").Controller;
class Index extends Controller {
  async index() {
    // 调用service
    const ctx = this.ctx;

    let renderData = {
      userInfo: {},
      companyInfo: []
    };
    // 获取用户信息
    renderData.userInfo = await ctx.service.index.userInfo();

    // 获取公司信息
    renderData.companyInfo = await ctx.service.index.companyInfo();

    // 获取项目信息
    for (let company of renderData.companyInfo) {
      company["list"] = await ctx.service.index.projectInfo(company.id);
    }

    ctx.body = { data: renderData };//直接跑回数据
  }
}

module.exports = Index;
