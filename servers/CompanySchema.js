var mongoose = require('./connect.js'),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({          
  companyName : { type: String },   //单位名称
                 
  companyProfile : { type: String },   //单位简介

  companyUsedName: { type: String },        //单位职责

  companyAddress : { type: String },   //单位地址

  company_TEL : { type: Number },        //单位电话
  
  paragraph  : { type: Number },        //税号,
	
	depositBank: { type: String },        //开户银行
	
	bankAccount	: { type: Number },        //银行账户
	
	companyCoreCustomer: { type: String },        //核心人物
	
	parentCompany: { type: String },        //上级单位	
	
	Company_spare1: { type: String },        //备用字段1
	
	Company_spare2: { type: String },        //备用字段2
	
	Company_spare3: { type: String },        //备用字段3,
	
	Company_spare4: { type: String }        //备用字段4

});

module.exports = mongoose.model('Companys',CompanySchema);//此处mondel用什么名字就会生成什么表