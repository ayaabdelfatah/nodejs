const mongoose = require('mongoose');
let dbvar ='mongodb://localhost:27017/firstproj';
if(process.env.NODE_ENV === "production"){
    dbvar="con string from server";
}

mongoose.connect(dbvar);
