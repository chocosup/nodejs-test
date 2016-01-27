var me = {
	name: "Ambroise",
	age: 24
};

var meJSON = JSON.stringify(me);

console.log(meJSON);
console.log(typeof meJSON);

var pers = JSON.parse(meJSON);

console.log(pers);
console.log(typeof pers);

var animal = '{"name": "Giotto"}';
var anim = JSON.parse(animal);
anim.age = 12;
animal = JSON.stringify(anim);

console.log(animal);