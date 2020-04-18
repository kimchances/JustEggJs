const Service = require("egg").Service;

class IndexService extends Service {
  // 获取首页数据
  async userInfo() {
    let result = await this.app.mysql.get("info_user");
    return JSON.parse(JSON.stringify(result));
  }
  // 公司列表
  async companyInfo() {
    let result = await this.app.mysql.select("info_company", {
      orders: [['id', 'desc']]
    });
    return JSON.parse(JSON.stringify(result));
  }
  // 项目列表 根据公司 ID 查询
  async projectInfo(companyId) {
    let result = await this.app.mysql.select("info_projects", {
      where: { 'companyId': companyId } // WHERE 条件
    });
    return JSON.parse(JSON.stringify(result));
  }
}
module.exports = IndexService;
