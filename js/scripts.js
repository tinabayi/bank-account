function Bank(name,initialdeposit,accountnumber,depositamount,withdrawamount){
    this.name=name;
    this.initialdeposit=initiadeposit;
    this.accountnumber=accountnumber;
    this.depositamount=depositamount;
    this.withdrawamount=withdrawamount;

}


$(document).ready(function() {
    $("form#blanks").submit(function(event) {
        event.preventDefault

        $(".clickable").hide();
        $(".current").show();
        var initiaDeposit = $("input#deposit").val();
$(".story").text(initiaDeposit);
    })


});