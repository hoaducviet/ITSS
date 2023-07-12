const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Register = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number},
        time: { type: String},
        date: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 500 },
        option: {type: String},
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);

//Custom query helpers
Register.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

//Add Plugin
Register.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Register', Register);
