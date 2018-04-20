const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
        lowercase:true
    },
    age:Number
});
userSchema.statics.findByUsername = function (username){
    const User = this;
    return User.findOne({username});
}
const User = mongoose.model('User',userSchema,'users');
module.exports = User;
