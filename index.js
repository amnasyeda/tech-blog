const router = require('express').Router();
const userRoutes = require('./user-routes');
const User = require('./User');
const Post = require('./Post');

router.use('/users', userRoutes);

module.exports = router;