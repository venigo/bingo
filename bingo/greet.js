function Person (fnm, lnm) {
	this.fname = fnm;
	this.lname = lnm;
	
}
Person.prototype.greet = function(){
		console.log("Hi " + this.fname + " " + this.lname);
}
module.exports = Person;
