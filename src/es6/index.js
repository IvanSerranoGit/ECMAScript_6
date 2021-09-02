 function newFunction(name, age, country){
     var name = name || 'Ivan';
     var age = age || 31;
     var country = country || 'MX';
     console.log(name, age, country);
 }

 // es6
 function newFunction2( name = 'Ivan', age = 31, country = 'MX'){
     console.log(name, age, country);
 };
 newFunction2();
 newFunction2('Juan', '25', 'CO')

 let hello = 'Hello';
 let world = 'World';
 let epicPhrase = hello + ' ' + world;
 console.log(epicPhrase);

 //es6
 let epicPhrase2 = `${hello} ${world}`; 
 console.log(epicPhrase2);

let lorem = 'Lorem ipsum dolor sit amet, consectetur |n'
 + ' Cras sit amet porttitor arcu, eu dignissim nisl. Ut et sem lorem. ';

 //es6
let lorem2 = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et 
lectus at nunc maximus euismod. 
Cras sit amet porttitor arcu, eu dignissim nisl. Ut et sem lorem.  
`;
console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Ivan',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age, person.country);

let {name, age, country} = person;
console.log (name, age, country);

let team1 = ['Ivan', 'Luis', 'Brenda'];
let team2 = ['Kiara', 'Crisitan', 'Gabriel'];
// es6 podemos unir diferentes elementos sin necsidad de traer uno a uno
let education = ['David', ...team1, ...team2];
console.log(education);

{
    var globalVar = 'Global Var';
}
//es6 let -> variable de tipo local 
//    var -> variable globlal 
{
    let globalLet = 'Global let';
    console.log(globalLet);

}
console.log(globalVar);
console.log(globalLet);

// variable que no puede modificar su valor
const a = 'b'

let name = 'Ivan';
let age = 31;

obj = {name: name, age: age };
//es6
obj2 = { name, age}
console.log(obj2)


const name = [
    {name: 'Ivan', age: 31},
    {name: 'Karla', age: 28}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
        //    ...
}
const listOfNames4 = name => {
    //    ...
}

const square = num => num * num;


//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject)=>{
        if (true){
            resolve('Hey!');
        }else {
            reject('Ups!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

    //clases

    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2,2));

    // import y export

    import { hello } from './module';
    hello();

    // generator

    function* helloWorld(){
        if(true){
            yield 'Hello, ';
        }
        if (true){
            yield 'World';
        }
    };

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);