$(document).ready(function(){
  $("#new-account").submit(function(event){
    event.preventDefault();
    var firstName = $("input#new-first-name").val();
    var lastName = $("input#new-last-name").val();
    var deposit = $("input.new-deposit").val();
    var withdraw = $("input.new-withdraw").val();
    var userAccount = new userInfo(firstName, lastName, deposit, withdraw);
     console.log(userAccount)

});

userInfo=function(firstName, lastName, deposit, withdraw){
  this.firstName = firstName;
  this.lastName = lastName;
  this.initdeposit = deposit;
  this.withdraw = withdraw;
  this.balance = parseInt(deposit);
}
 acctBalance=function(deposit) {
   userInfo.balance=userInfo.balance+deposit;
 }

userInfo.prototype.deposit=function() {
  return parseInt(this.balance + this.initDeposit);
}

// }
$("#depwithdraw").submit(function(event){
  event.preventDefault();
var deposit = $("input.deposit").val();
var balance = new acctBalance(deposit);

});
});
