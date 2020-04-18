const Service = require("egg").Service;

class DetailService extends Service {
  // 详情
  async detailInfo(projectId) {
    let result = await this.app.mysql.get("info_projects",
      { 'id': projectId });
    return JSON.parse(JSON.stringify(result));
  }
}
module.exports = DetailService;
