// Business logic

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


// User logic

$(function() {
	$('form#add').submit(function(e) {
		e.preventDefault();
		var number1 = parseInt($('#add1').val());
		var number2 = parseInt($('#add2').val());
		var result = add(number1, number2);
		$('#output').append('<h2>' + result + '</h2>');
	});

  $('form#subtract').submit(function(e) {
		e.preventDefault();
		var number1 = parseInt($('#subtract1').val());
		var number2 = parseInt($('#subtract2').val());
		var result = subtract(number1, number2);
		$('#output').append('<h2>' + result + '</h2>');
	});

  $('form#multiply').submit(function(e) {
    e.preventDefault();
    var number1 = parseInt($('#multiply1').val());
    var number2 = parseInt($('#multiply2').val());
    var result = multiply(number1, number2);
    $('#output').append('<h1>' + result + '</h1>');
  });

  $('form#divide').submit(function(e) {
    e.preventDefault();
    var number1 = parseInt($('#divide1').val());
    var number2 = parseInt($('#divide2').val());
    var result = divide(number1, number2);
    $('#output').append('<h1>' + result + '</h1>');
  });

});
