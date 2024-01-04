var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    item:{
        type:String
    },
    status:{
        type:String
    }
})

module.exports = mongoose.model("todos",schema); 