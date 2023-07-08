const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/sortMiddleware');
const db = require('./config/db');
// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));

//Custom Middleware
app.use(SortMiddleware);

app.use(methodOverride('_method'));
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

const route = require('./routes');
const handlebars = require('./helpers/handlebars');

// Route

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
