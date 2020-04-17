exports.keys = "KimChan94";
// 这里加入了一个官方教学的 模板引擎  plugin.js里面配置了这个
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};
// 在config里面配置一些Service里面用到的配置
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};