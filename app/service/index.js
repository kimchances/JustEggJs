const Service = require("egg").Service;

class IndexService extends Service {
  async list(page = 1) {
    // 读取config.default里面的配置
    const { serverUrl, pageSize } = this.config.news;

    // 插入http 客户端跑get去hacker-news获取数据
    const { data: idList } = await this.ctx.curl(
      `${serverUrl}/topstories.json`,
      {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`
        },
        dataType: "Json"
      }
    );

    // 同时去 GET 详情
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: "json" });
      })
    );
    return newsList.map(res => res.data);
  }
  // 获取首页数据
  async userInfo() {
    let result = await this.app.mysql.get("info_user");
    return JSON.parse(JSON.stringify(result));
  }
  // 公司列表
  async companyInfo() {
    let result = await this.app.mysql.select("info_company");
    return JSON.parse(JSON.stringify(result));
  }
  // 项目列表 根据公司 ID 查询
  async projectInfo(companyId) {
    let result = await this.app.mysql.select("info_projects", { companyId });
    return JSON.parse(JSON.stringify(result));
  }
}
module.exports = IndexService;
