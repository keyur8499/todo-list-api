var user = require('../model/model');

exports.insert = async(req,res) => {
     
   var data =await user.create(req.body);

     res.status(200).json({
        status:"success",
        data
     })
}
exports.select_data = async(req,res) => {
     
    var data = await user.find(req.body);
     res.status(200).json({
        status:"success",
        data
     })
}
exports.delete_data = async(req,res) => {
     var  id = req.params.id;
    var data = await user.findByIdAndDelete(id);
     res.status(200).json({
        status:"data delete",
        
     })
}
exports.update_data = async(req,res) => {
     
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body);
     res.status(200).json({
        status:"success",
        data
     })
}


exports.pen = async(req,res) => {
   var id = req.params.id;
   var data = await user.findByIdAndUpdate(id,{status:"pending"});

   res.status(200).json({
      status:"pending",
      data
   })
}
exports.pending = async(req,res) => {

   var data = await user.find({status:"pending"});
   res.status(200).json({
      status:"pending data",
      data
   })
}
exports.run = async(req,res) => {
   var id = req.params.id;
   var data = await user.findByIdAndUpdate(id,{status:"running"});

   res.status(200).json({
      status:"running",
      data
   })
}
exports.running = async(req,res) => {

   var data = await user.find({status:"running"});
   res.status(200).json({
      status:"running data",
      data
   })
}
exports.com = async(req,res) => {
   var id = req.params.id;
   var data = await user.findByIdAndUpdate(id,{status:"complate"});

   res.status(200).json({
      status:"complate",
      data
   })
}
exports.complate = async(req,res) => {

   var data = await user.find({status:"complate"});
   res.status(200).json({
      status:"complate data",
      data
   })
}
exports.dic = async(req,res) => {
   var id = req.params.id;
   var data = await user.findByIdAndUpdate(id,{status:"dicline"});

   res.status(200).json({
      status:"dicline",
      data
   })
}
exports.dicline = async(req,res) => {

   var data = await user.find({status:"dicline"});
   res.status(200).json({
      status:"dicline data",
      data
   })
}

