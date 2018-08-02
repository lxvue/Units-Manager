var mongoose = require('./connect.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
//  username : { type: String },                    //用户账号
//  username2 : { type: String },                    //用户账号
//  userpwd: {type: String},                        //密码
//  userage: {type: Number},                        //年龄
//  logindate : { type: Date}                       //最近登录时间
  account : { type: String },   //账号                 
  passward : { type: String },   //密码
  name : { type: String },        //姓名
  sex : { type: String },               //性别                      
});

module.exports = mongoose.model('User',UserSchema);//此处mondel用什么名字就会生成什么表