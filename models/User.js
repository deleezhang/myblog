/**
 * Created by zdl on 2015-10-23.
 */
    var mongodb=require('./mongodb');

var UserSchema=mongodb.mongoose.Schema({
    userID:String,
    userName:String,
    passWord:String,
    createDate:{type:Date,default:Date.now()},
    isValid:{type:Boolean,default:true},
    image:{coverSmall:String,
            coverBig:String,
            src:String},
    email:String
});
var UserModel = mongodb.mongoose.model('user', UserSchema);
UserSchema.statics.findUserByID = function(id, cb) {
    this.find({ _id : id }, cb);
};
exports.findUserByName= function(name, cb) {
     this.findUserByName({ userName : name}, cb);
};

exports.add= function(obj,cb){
    var newEntity =new UserModel(obj);
    newEntity.save(function(err){
        if(err){
            console.log("Save user ERR:"+err);
            cb(err);
        }else{
            console.log("Save user Scuess!");
            cb(null);
        }
    });
};
exports.delete=function(id,cb){
    UserSchema.findUserByID(id,function(err,obj){
        if(err){
            console.log("Delete user ERR:"+err);
            cb(err);
        }else{
            console.log("Delete user Scuess!");
            obj.remove();
        }
    });
};
exports.update=function(obj,cb){
    UserSchema.findUserByID(obj._id,function(err,obj){
        if(err){

        }else{
            obj.save(function(err){
                if(err){
                    console.log("Save user ERR:"+err);
                    cb(err);
                }else{
                    console.log("Save user Scuess!");
                    cb(null);
                }
            });
        }
    });
};

exports.execPageQuery=UserModel.execPageQuery= function(currentPage,pageSize, conditions, fields, options,callback){

};