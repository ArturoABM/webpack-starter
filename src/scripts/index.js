// destructuring
// let personId = [1, 2, 3, 4];
// let [, person2, ...persons] = personId;
// //console.log('person1',person1);
// console.log('person2', person2);
// console.log('persons', persons);

// ---------------------------------------
// destructuring Objects
// let person = { id: 10, name: 'axity',apllidoP:'bravo',apllidoM:'bravo' };
//let rest;
// let { id, name , ...personsId} = person;
// console.log('ids',id);


//------------------------------------------
// Spread Syntax
// function procesPersons(person1,person2,person3) {
//     console.log(person1,person2,person3);
// }

// function procesPersons(person1,person2,person3,parameter4) {
//     console.log(person1,person2,person3,parameter4);
// }
// procesPerrsons(1,2,3);
// procesPerrsons(1,2,3,4);
//procesPerrsons(...personsId);
//let personsId = 'abc';
//procesPerrsons(...personsId);


//------------------------------------------------------
// Type dato
// console.log(typeof(1));
// console.log(typeof(true));
// console.log(typeof('Hello'));
// console.log(typeof( function(){} ));
// console.log(typeof({}));
// console.log(typeof(null)); //null object refer to C,C++
// console.log(typeof(undefined));
// console.log(typeof(NaN));

// -------------------------------------------------------

// Convert
// let id = 10;
// console.log(typeof(id));
// console.log(typeof(id.toString()));
// console.log(Number.parseInt('A44AA'));
// console.log(Number.parseInt('44AA'));
// console.log(Number.parseInt('010'));



//----------------------------------------------------
//Loops

// for (let index = 0; index < 12; index++) {
    
//     if(index === 2) {
//       break;
//     }
//     console.log(index);
// }


// -----------------------------------------------------
// Operadores
// console.log(1 == 1);
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 != '1');
// console.log(1 !== '1');

// let year = 2010;
// console.log(++year);
// year >>= 2;
// console.log(year);



// -----------------------------------------------------------
// scopt block
// function findPerson() {
//      message = 'Finding';
//     console.log(message);
//     let myFuntion = function searchKey() {
//         let message = 'cercano Finding';
        
//     };
//     myFuntion();
   
// }

// findPerson();
// console.log(message);

// ------------------------------------------------------------------

// IIFE pattern

// let app = (function () {
//     let personaId = 123;

//     return function (num) {
//         return personaId + num;
//     };

// })();
// console.log(app(20));



//-------------------------------------------------------
// closure
// function sumaIva(change) {
//     return function (amount) {
//      return change * amount;
//     };
//  }

//  // retorna una funcion
// let iva = sumaIva(0.16);

// console.log(iva(20));
// console.log(iva(30));
// console.log(iva(40));



//  -----------------------------------------------------
// THIS
// let o  = {
//     personId: 123,
//     getId: function (){
//         return this.personId;
//     }
// };

// console.log(o.getId());


//---------------------------------------------------------

// CALL

// let o  = {
//     personId: 123,
//     getId: function (){
//         return this.personId;
//     }
// };

// let newOb = {
//     personId:456
// };
// // remplaza el contexto 
// console.log(o.getId.call(newOb));


//-----------------------------------------------------
//Apply
// let o  = {
//     personId: 123,
//     getId: function (title,action){
//         return `${title}- ${this.personId} - ${action}`;
//     }
// };

// let newOb = {
//     personId:456
// };
// // remplaza el contexto 
// console.log(o.getId.apply(newOb,['Person','Upsss']));






// let o  = {
//     personId: 123,
//     getId: function (){
//         return ` ${this.personId}`;
//     }
// };

// let newOb = {
//     personId:456
// };
// let newBind =o.getId.bind(newOb);
// console.log(newBind());



//-----------------------------------------------------------

// ARROW FUNTION

// let getId1 = (prefix)=>  123 + prefix;

// let getId2 = function () {
//     return 123;
// };

// console.log(getId1(12));
// console.log(getId2());


//-------------------------------------------------------------

// function Person(id){
//     this.personId = id;
    
// }

// Person.prototype.register = function (){
//     console.log(`Register : ${this.personId}`);
// };

// let person = new Person();
// person.register();

//-----------------------------------------------------------
// JSON 

// let person = { name: 1, age: 23 };

// console.log(JSON.stringify(person));

// let obj = `{"name":1,"age":23}`;

// console.log(JSON.parse(obj));



//-------------------------------------------------------
// ARRAY
// reduce

// let result = [1,2,3,4,5,6].reduce((before,after)=>  before + after);
// console.log(result);



let persons = [
    { personId: 123, age: 10, name: 'Javier'},
    { personId: 321, age: 20, name: 'Rodriguez'},
    { personId: 231, age: 30, name: 'Olvera'}
];

// persons.forEach(data => {
// console.log(data);
// });


// let resultFilter = persons.filter(data => data.age > 10);
// console.log(resultFilter);

// let resultMAp = persons.map(data =>{
//   data.age = data.age + 10;
//   return data;  
// } );

// console.log(resultMAp);
// let resultFind = persons.find(data => data.age === 10);
// console.log(resultFind);


// let element = persons.every(p => p.name !=  null);

// let resultFilter = persons.filter(data => data.age > 10).map(data =>{
//        data.age = data.age + 10;
//        return data;  
//      }).find(data => data.age > 10);

// console.log(resultFilter);


// class Persona {
    
//     constructor(id){
//        this.id = id;
//     }
//     identity(sufix){
//       return `person ${sufix} `;
//     }

// }

// let persona = new Persona();
// let result = persona.identity('hola');
// console.log(result);

// console.log(persona);


class Engine {

    constructor() {
      this.type = 'hybrid';
    }

    star(){
        return `Staring : ${this.type}`;
    }
}

class Car extends Engine{
    constructor(){
        super();
    }

    star(){
        return super.star();
    }
}
let car = new Car();
console.log(car.star());



