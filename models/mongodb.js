/**
 * Created by zdl on 2015-10-16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://123.57.143.189/my_blog');
exports.mongoose = mongoose;