var calculatorModel = function calculator(){
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
			{val:'0'}
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

	//clear Result
	index.clearResult = function(){
		index.result('');
	}
};
ko.applyBindings(new calculatorModel());