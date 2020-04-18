const Controller = require("egg").Controller;
class Detail extends Controller {
  async detail() {
    // 调用service
    const ctx = this.ctx;
    let renderData = {};

    // 获取项目信息
    renderData = await ctx.service.detail.detailInfo(ctx.params.id);

    ctx.body = { data: renderData };//直接跑回数据
  }
}

module.exports = Detail;
