var calculatorModel = function calculator(){
	var self=this;

	// array of commands
	self.commands=[{command: ' + '},{command: ' - '},{command: ' * '},{command: ' / '}];

	//array of numbers
	self.numbers=[
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
	self.result = ko.observable('');
	
	//Show number on screen
	self.addNumber = function(){
		self.result(self.result()+this.val);
	}

	//Adding commands
	self.addCommand = function(){
		self.result(self.result()+this.command);
	}

	//calculation
	self.calculate = function(){
		self.result(eval(self.result()));
	}

	//clear Result
	self.clearResult = function(){
		self.result('');
	}
};
ko.applyBindings(new calculatorModel());