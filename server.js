'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();


router.render = (req, res) => {
  res.jsonp ({ //returns json to the thing that requested it.
    results: res.locals.data,
  })
}


server.use(router);
server.use(middleware);
server.listen(3000, () => {
  console.log('Json-server awaiting request')
})
