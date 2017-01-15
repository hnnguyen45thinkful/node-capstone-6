

$(document).ready(function(){

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
$(function (){
	var total = 0;
	$("#expenseList table td").each(function () {
		total = total + parseInt($(this).val());
	});
	$("#totalFeeMonthly").html('$' + total)
});

	$("#submit").click(function(){
		var tax = 0;
		var income = $('#income').val();
		if (income <= 100000) {tax = 0;}
		if (income > 100000 && income <= 50000){}
			tax = (income -100000)*10/100;
	}
		if(income > 50000 && income <= 100000){
			tax = 25000 + ((income-500000)*20/100);
		}
		if(income > 100000){
			tax = (25000 + 100000) + ((income -100000)*30/100);
		}
		$('#tax').val(tax);
	});
$(function (){
	var tax = 0;
	$("#expenseList table td").each(function () {
		total = total + parseInt($(this).val());
	});
	$("#totalFeeMonthly").html('$' + total)
});


});