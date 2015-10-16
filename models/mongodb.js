/**
 * Created by zdl on 2015-10-16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');
exports.mongoose = mongoose;