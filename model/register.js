const UserModel = require("../schemas/register");

module.exports={

    register:function(inputData, callback){
        userData= new UserModel(inputData);
        userData.save(function(err, data){
        if (err) throw err;
         return callback(data);
        });
    }
}