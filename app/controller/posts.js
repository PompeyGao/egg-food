'use strict';


const Controller = require('egg').Controller;
class PostController extends Controller {
  async create() {
    const { ctx, service } = this;
    const createRule = {
      title: { type: "string" },
      content: { type: "string" },
    };
    // 校验参数
    ctx.validate(createRule);
    // 组装参数
    const author = ctx.session.userId;
    const req = Object.assign(ctx.request.body, { author });
    // 调用 Service 进行业务处理
    const res = await service.post.create(req);
    // 设置响应内容和响应状态码
    ctx.body = { id: res.id };
    ctx.status = 201;
  }
  async index() {
    const { ctx, service } = this;
    ctx.body = {
      id1: ctx.params.id1,
      id2: ctx.params.id2,
      name: ctx.query.name,
      age: ctx.query.age,
    };
    const used = Date.now();
    // 设置一个响应头
    ctx.set("show-response-time", used.toString());
    ctx.status = 200;
  }

  async show() {
    const { ctx, service } = this;
    const rname = ctx.query.name || "";
    ctx.logger.info("some request data: %j", ctx.query.name);
    const resInfo = await service.restaurant.find(rname);
    ctx.body = JSON.parse(resInfo);
    const used = Date.now();
    // 设置一个响应头
    ctx.set("show-response-time", used.toString());
    ctx.status = 200;
  }

  async edit() {}

  async update() {}

  async destroy() {}
}
module.exports = PostController;