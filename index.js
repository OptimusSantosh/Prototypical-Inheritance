var Job = function() {
  this.pays = true;
}

Job.prototype.print = function(){
  console.log(this.pays ? 'Please Hire me' : 'No Thank you');
};

var Techjob = function(title, pays) {
  Job.call(this);
  
  this.title = title;
  this.pays = pays;
};

Techjob.prototype = Object(Job.prototype);
Techjob.prototype.constructor = Techjob;

var softwarePosition = new Techjob('Javascript Developer', true);

var softwarePosition2 = new Techjob('VB Developer', false);

console.log(softwarePosition.print());

console.log(softwarePosition2.print());
