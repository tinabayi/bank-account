function Contact(name,idNumber,initialDeposit){
    this.name=name;
    this.idNumber=idNumber;
    this.initialDeposit=initialDeposit;
}
$(document).ready(function(event) {
   
    $("form#new-user").submit(function(event) {
      
    event.preventDefault();
      var inputtedName = $("input#new-name").val();
      var inputtedId = $("input#id-number").val();
      var inputtedInitialDeposit = $("input#initial-deposit").val();
      
  
      var newContact = new Contact(inputtedName, inputtedId,inputtedInitialDeposit);
  
      $("#contacts").text(newContact.initialDeposit);
  
      $("input#new-name").val("");
      $("input#id-number").val("");
      $("input#initial-deposit").val("");

    });

    $("form#deposit-withdraw").submit(function(event) {
        event.preventDefault();
   
      var inputtedDepositAmount = $("input#deposit").val();
        var inputtedWithdrawAmount = $("input#withdraw").val();
     
        Contact.prototype.deposit=function(){
            var amountDeposit= this.initialDeposit + inputtedDepositAmount;
           $("#contacts").text(amountDeposit);
        }
        Contact.prototype.withdraw=function(){
             return inputtedWithdrawAmount ;
           $("#deposit-withdraw").text(inputtedWithdrawAmount);

           $("input#deposit").val("");
           $("input#withdraw").val("");
           
     
  
  }); 
});
   
    