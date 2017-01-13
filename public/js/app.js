function populateIncomes(){

	var totalIncomeYearlyAfterTax;
 	var totalIncomeYearly = $('.totalIncomeYearly').append().val().html();
	var taxRate = 0.30 * totalIncomeYearly;//30 percent
	totalIncomeYearlyAfterTax = taxRate;
	$('#incomeList table tfoot').html(totalIncomeYearly);
	$('.totalIncomeYearlyAfterTax').append().val().html();
};

function populateExpenses(){

    var expensesContent = '';
    var totalFeeMonthly = 0;
    var totalMonthlyCost = 0;
    var totalFeeMonthly;  
        $('#expenseList table tr').html(totalFeeMonthly);
        $('#totalFeeMonthly').html(totalMonthlyCost);
    };

$(document).ready(function(){
		populateIncomes()
		populateExpenses()

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


});