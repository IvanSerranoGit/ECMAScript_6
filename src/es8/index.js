const data = {
    frontend: 'Ivan',
    backend: 'Brenda',
    design: 'Betty'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const newData = {
    frontend: 'Ivan',
    backend: 'Brenda',
    design: 'Betty',
}

const values = Object.values(newData)
console.log(values)

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ---------'))


const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout (() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
}

anotherFunction()
