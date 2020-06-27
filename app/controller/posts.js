'use strict';

exports.index = async ctx => {
  ctx.body = `name: ${ctx.query.name},age: ${ctx.query.age}`;
};

exports.new = async () => {};

exports.create = async () => {};

exports.show = async () => {};

exports.edit = async () => {};

exports.update = async () => {};

exports.destroy = async () => {};