/**
 * Created by smoseley on 8/14/2015.
 */
var router = require('express').Router();
var four0four = require('./utils/404')();

router.get('/*', four0four.notFoundMiddleware);

module.exports  = router;
