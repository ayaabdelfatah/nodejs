// const mongoose = require('mongoose');
// let dbvar ='mongodb://localhost:27017/firstproj';
// if(process.env.NODE_ENV === "production"){
//     dbvar="con string from server";
// }
const mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost:27017/firstproj';

if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://admin:admin@ds251819.mlab.com:51819/firstproj'
}
mongoose.connect(mongo_url);
//mongoose.connect(dbvar);
