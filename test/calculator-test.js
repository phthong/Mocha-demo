(function(){
	var expect = chai.expect;
	describe('Calculator', function() {
		before(function() {
            // Create a new instance of our Calculator module to be used in
            // each `it` test case within the ‘Calculator’ describe block
            this.calculator = new Calculator();

        });
		it('Check sum of number', function() {
			expect(this.calculator.add(2, 5, 4)).to.equal(7);
		});
	});
})()