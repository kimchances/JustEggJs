module.exports = app => {
    const { router, controller } = app;
    // 获取首页数据
    router.get('/egg/', controller.index.index);
    
    // 获取详情数据
    router.get('/egg/detail/:id', controller.detail.detail);
}