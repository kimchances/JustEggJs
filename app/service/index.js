const Service = require('egg').Service;

class IndexService extends Service {
    async list(page = 1) {
        // 读取config.default里面的配置
        const { serverUrl, pageSize } = this.config.news;

        // 插入http 客户端跑get去hacker-news获取数据
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
            data: {
                orderBy: '"$key"',
                startAt: `"${pageSize * (page - 1)}"`,
                endAt: `"${pageSize * page - 1}"`,
            }, dataType: 'Json'
        });

        // 同时去 GET 详情
        const newsList = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, { dataType: 'json' });
            })
        );
        return newsList.map(res => res.data);
    }
    // 获取首页数据
    async index() {
        let result = await this.app.mysql.get('info_user'); // 单实例可以直接通过 app.mysql 访问
        return result;
    }
    // 获取首页项目数据,跑完公司表,跑项目表,然后将一个整体抛回去
    async projects() {
        // let result = await this.app.mysql.get('info_company'); // 单实例可以直接通过 app.mysql 访问
        // return result;
    }
}
module.exports = IndexService;