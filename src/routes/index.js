const newsRouter = require('./news');
const meRouter = require('./me');
const userRouter = require('./user');
const adminRouter = require('./admin');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
// const userHomeRouter = require('./user/home');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/user', userRouter);
    app.use('/admin', adminRouter);
    app.use('/courses', coursesRouter);

    // app.use('/user/home', userHomeRouter);
    app.use('/', siteRouter);
}
module.exports = route;
