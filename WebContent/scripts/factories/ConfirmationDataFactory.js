AdminUtilityApp.service('ConfirmationDataFactory',function(){

var ClientName='';
var AllIPRanges='';
var AddIPRanges ='';
var DeleteIPRanges='';
var ValidityPeriod='';
var ValidityUnit='';
var IsUpdate='';
var Password='';
return {
setClientName :function(clientName){
ClientName=clientName;
},
setUpdateRequest:function(isUpdate){
IsUpdate=isUpdate;
},
setPassword:function(password){
Password=password;
},
setAllIPRanges:function(allIPRanges){
AllIPRanges=allIPRanges;
},
setAddValidityPeriod:function(validityPeriod){
ValidityPeriod=validityPeriod;
},
setAddValidityUnit:function(validityUnit){
ValidityUnit=validityUnit;
},

setAddIPRanges:function(IPRange){
AddIPRanges=IPRange;
},
setDeleteIPRanges:function(IPRange){
DeleteIPRanges=IPRange;
},
getClientName:function(){
return ClientName;
},
getIPRangesToBeAdded:function(){
return AddIPRanges;
},
getUpdateRequest:function(){
return IsUpdate;
},
getIPRangesToBeDeleted:function(){
return DeleteIPRanges;
},
getAllIPRanges:function(){
return AllIPRanges;
},
getValidityUnit:function(validityUnit){
return ValidityUnit;
},
getValidityPeriod:function(validityPeriod){
return ValidityPeriod;
},
getPassword:function(){
return Password;
}
};
});
