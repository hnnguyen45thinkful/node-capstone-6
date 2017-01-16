
function colSum() {
    var sum = 0;
    //iterate through each input and add to sum
    $('.payPeriodValue').each(function() {     
            sum += parseInt($(this).text());                     
    }); 
    //change value of total
    $('#totalFeeMonthly').html('$' + sum);
}



$(document).ready(function(){
	colSum();

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