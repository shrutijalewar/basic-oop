/* global prompt:true*/

var dog = {};
dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

 var dog2 = {name: 'sam', age:4};
console.log(dog2);

var prompt = require('sync-prompt').prompt;

var name = prompt('Please enter your Dog name: ');
var age =  prompt('Enter Age: ');
var breed =  prompt('Enter Breed: ');
age = parseInt(age);
var dog3 = {name:name, age:age, breed:breed};

console.log(dog3);

var prompt = require('sync-prompt').prompt;
var Dogs = [];

var info = prompt('Would you like to enter your dog inormation? (y/n): ');
while(info !== 'n'){
var name = prompt('Enter Name: ');
var age = prompt('Enter Age: ');
var gender = prompt('Enter Gender: ');
var temp = {name:name, age:age, gender:gender};
if(info === 'y'){(Dogs.push(temp));}
   info = prompt('Would you like to enter your dog information? (y/n): ');}
   
   console.log(Dogs);




