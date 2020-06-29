'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/posts/:id1/:id2', controller.posts.index);
  router.get("/api/posts/query", controller.posts.show);
  // router.resources('users', '/api/v1/users', controller.v1.users);
  // app/controller/v1/users.js

};
