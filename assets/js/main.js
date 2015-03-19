var calculatorModel = function calculatorModel(){
	var index=this;

	// array of commands
	index.operators=[{operator: ' + '},{operator: ' - '},{operator: ' * '},{operator: ' / '}];

	//array of numbers
	index.numbers=[
			{val:'1'},
			{val:'2'},
			{val:'3'},
			{val:'4'},
			{val:'5'},
			{val:'6'},
			{val:'7'},
			{val:'8'},
			{val:'9'},
			{val:'0'},
			{val:'.'}
	];

	//result view
	index.result = ko.observable('');
	
	//Show number on screen
	index.displayNumber = function(){
		index.result(index.result()+this.val);
	}

	//Adding commands
	index.displayOperator = function(){
		index.result(index.result()+this.operator);
	}

	//calculation
	index.calculate = function(){
		index.result(eval(index.result()));
	}

	//trignometry
	index.sin = function(){
		var x = Math.sin(index.result());
		index.result(x);
	}
	index.cos = function(){
		var y = Math.cos(index.result());
		index.result(y);
	}
	index.tan = function(){
		var z = Math.tan(index.result());
		index.result(z);
	}


	//clear Result
	index.clearResult = function(){
		index.result('');
	}

	//clear last element
	index.clearLast = function(){
		var result = index.result();
		console.log(result);
		// JSON.stringify(result);
		var array = [];
		for(var i in result){                               
			array.push(result[i]);
		}
		array.pop();
		var str= '';
		for(var i in array){
			str+=array[i];
		}
		index.result(str);
	}
};
ko.applyBindings(new calculatorModel());