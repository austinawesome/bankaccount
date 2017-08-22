$(document).ready(function(){
  $("#bankAcct").submit(function(event){
    event.preventDefault();
    var name = $(".name").val();
    var withDraw = $(".withDraw").val();
    var deposit = $(".deposit").val();
    var newUser = new customerAcct(name, deposit);
    var newBalance = new balance(deposit);
    newUser.history.push(newBalance);
    console.log(newUser.history[0]);

  });
});

function customerAcct(name,deposit) {
  this.name=name;
  this.history = [];
};

function balance(deposit){
  this.deposit= deposit;
};
