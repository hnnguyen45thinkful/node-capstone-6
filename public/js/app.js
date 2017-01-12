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

	// $('.deleteIncomeLink').click(function(event){
	// 	event.preventDefault();
	// 	var income = $(this).attr('data-id');
	// 	var tr = $(this).parent().parent();
	// 	$.ajax({
	// 		url: '/income',
	// 		method: 'DELETE',
	// 		data: {
	// 			id: income
	// 		},
	// 		success: function(data){
	// 			tr.remove();
	// 		}
	// 	});
	// });


});