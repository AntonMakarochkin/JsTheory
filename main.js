/* const p = new Promise (function(resolve, reject) {
    setTimeout(() => {
        console.log('preparing data')
        const informat = {
            name: 'Anton',
            age: 25,
            job: 'frontend',
        }
        resolve(informat)
    }, 2000)
    
});

p.then(function(getta) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            getta.modif = 'modifated'
            resolve(getta)
        })
    })
 
}).then(clientData => {
    console.log('Data recived', clientData)
}).then( x => {

}) */


/* const slip = ms => {
    return new Promise (resolve => {
        setTimeout(() => resolve(), ms)
    })
}


slip(2000).then(() => console.log('lol')) */



/* class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.color = options.color
    }
}

const dog = new Animal({
    name: 'will',
    age: 26,
    color: 'black',
})

class Cat extends Animal {
    constructor(options){
        super(options)
        this.eyes = options.eyes
    }

}

const cat = new Cat({
    name:"kitty",
    age:2,
    color:'red',
    eyes: 'green',
})

 */

/* class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
      
    
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}


class Box extends Component {
    constructor (options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const  box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

class Circle extends Box {
    constructor(options) {
        super(options)
    }
} */

/* const slip = ms => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(), ms)
    })
}

const url = 'https://jsonplaceholder.typicode.com/todos' */

/* function fetchTodos() {
    return slip(2000)
    .then(()=> {
       return fetch(url)
    }).then(respons => respons.json())
}

fetchTodos().then(data=>{console.log('Data:', data)}) */



/* const log = text => `log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArgs, args) {
        console.log('calling...')

        return target.apply(thisArgs, args)
    }
})


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}


const PersonProxy = new Proxy(Person,{
    construct(target, args) {

    }
}) */


/* function* strGenerator() {
    yield 'h'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator() */



let people = [
    {name:'anton',age:9,hairColor:'red',},
    {name:'kirill',age:15,hairColor:'blue',},
    {name:'dora',age:20,hairColor:'black',},
    {name:'mini',age:16,hairColor:'white',},
]

/* people.forEach(person => console.log(person.name)) */

/* const newPeople = people.map(person =>  `${person.name} (${person.age})`) */


/* const adults = people.filter(person => person.age >= 18 ) */


/* const amound = people.reduce((total, person) => total + person.age, 0) */

/* const anton = people.find(person => person.name === 'anton') */

/* const doraIndex = people.find(person => person.age === 20) */

const doraIndex = people
.filter(person => { return person.age >= 15})
.map(person => {
    return {
        info: `Info about ${person.name} (${person.age})`,
        hairColor: 'yes'
    }
})

console.log(doraIndex) 