function colSumExpense() {
    var sum = 0;
    //iterate through each input and add to sum
    $('.payPeriodValue1').each(function() {     
            sum += parseInt($(this).text());
         });
    console.log(sum); 
    //change value of total
    //$("#yourdropdownid option:selected").text();
    //$("select[id=yourDropdownid] option:selected").text()
    // var colChoice = $('.payPeriodSelect field-select').val('');

    $(".payPeriodSelect").change(function(){
    //console.log($(this).val());    
    var colChoice = $(this).val(); 
    console.log(colChoice);
    if( colChoice == 'Weekly') {   
               sum = sum*52;
            }
            else if( colChoice == 'Monthly'){
                sum= sum*12;
            }
            else if( colChoice == 'Yearly'){ 
                sum=sum*1;
			}
			else if( colChoice == 'Hourly'){  
            	sum=sum*8;
            }
            else {
            	sum;
            }
    });
    //console.log(sum);
    //var sum1 = $('td#current1').text();
    //console.log(sum1);
    
    
// console.log(newsum);
                    
    $('#totalFeeMonthly').html('$' + sum);
        return sum;
}


function colSumIncome() {
    var sum = 0;
    //iterate through each input and add to sum
    $('.payPeriodValue2').each(function() {     
            sum += parseInt($(this).text());                     
    }); 
    //change value of total
    $('#totalIncomeYearly').html('$' + sum);
    var tax = 0.70*sum;
    $('#totalIncomeAfterTax').html('$' + tax);
    return tax;
}


function finalCurrentBalance(){
	var incomeStart = colSumIncome();
	var expenseStart = colSumExpense();
	var balanceFinal = incomeStart - expenseStart;
		$('#totalBalance').html('$' + balanceFinal);
}

$(document).ready(function(){
	colSumExpense();
	colSumIncome();
	finalCurrentBalance();

	$('.deleteExpenseLink').click(function(event){
		event.preventDefault();
		var expense = $(this).attr('data-id');
		var tr = $(this).parent().parent();
		$.ajax({
			url: '/expense',
			method: 'DELETE',
			data: {
				id: expense
			},
			success: function(data){
				tr.remove();
				finalCurrentBalance();
			}
		});
	});

	$('.deleteIncomeLink').click(function(event){
		event.preventDefault();
		var income = $(this).attr('data-id');
		var tr = $(this).parent().parent();
		$.ajax({
			url: '/income',
			method: 'DELETE',
			data: {
				id: income
			},
			success: function(data){
				tr.remove();
				finalCurrentBalance();
			}
		});
	});

	// $("#submit").click(function(){
	// 	var tax = 0;
	// 	var income = $('#income').val();
	// 	if (income <= 100000) {tax = 0;}
	// 	if (income > 100000 && income <= 50000){}
	// 		tax = (income -100000)*10/100;
	// }
	// 	if(income > 50000 && income <= 100000){
	// 		tax = 25000 + ((income-500000)*20/100);
	// 	}
	// 	if(income > 100000){
	// 		tax = (25000 + 100000) + ((income -100000)*30/100);
	// 	}
	// 	$('#tax').val(tax);
	// });



// $(function (){
// 	var total = $(this).attr('');
// 	$('.salary field-short').find('td').each(function () {
// 		if(!isNaN(this.value) && this.value.length!=0){
// 		total = total + parseInt($(this).val());
// 	}
// 	});
// 	$("#totalFeeMonthly").html('$' + total)
// });

});

//if statement on expense.ejs examples payperiod
//sum modify.
