exports.keys = "KimChan94";
// 这里加入了一个官方教学的 模板引擎  plugin.js里面配置了这个
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks"
  }
};
exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: "120.78.78.155",
    // 端口号
    port: "3306",
    // 用户名
    user: "18239081290312",
    // 密码
    password: "128390128",
    // 数据库名
    database: "server_page"
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false
};
