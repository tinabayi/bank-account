//Business logic
function Contact(name,idNumber,initialDeposit){
    this.name=name;
    this.idNumber=idNumber;
    this.initialDeposit=initialDeposit;
}
var inputtedDepositAmount = 0;

$(document).ready(function(event) {
   
    $("form#deposit").submit(function(event) {
      
    event.preventDefault();
      var inputtedDepositAmount = $("input#deposit-amount").val();
      console.log
      var inputtedId = $("input#id-number").val();
      var inputtedInitialDeposit = $("input#initial-deposit").val();
      
  
      var newContact = new Contact(inputtedName, inputtedId,inputtedInitialDeposit);
      
  
      $("#contacts").text(newContact.initialDeposit);
  
      $("input#new-name").val("");
      $("input#id-number").val("");
      $("input#initial-deposit").val("");

    });
//user interface logic
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
});  

//      $("form#deposit").submit(function(event) {
//         event.preventDefault();
   
//       var inputtedDepositAmount = $("input#deposit-amount").val();
//        console.log(inputtedDepositAmount)
//          var inputtedWithdrawAmount = $("input#withdraw").val();
     
//          Contact.prototype.deposit=function(){
//              var amountDeposit= this.initialDeposit + inputtedDepositAmount;
//              console.log(amountDeposit)
//             $("#contacts").text(amountDeposit);
//          }
//         Contact.prototype.withdraw=function(){
//               var balance= amountDeposit-inputtedWithdrawAmount ;
//         }            $("#deposit-withdraw").text(balance);

//            $("input#deposit").val("");
//            $("input#withdraw").val("");
           
     
  
//    }); 
// });
   
    