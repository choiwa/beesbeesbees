var Bee = function() {
  Grub.call(this,) // this call Grub instructor
  this.age = 5; // update new value;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
