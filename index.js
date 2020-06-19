//old js
function sayName() {
    console.log("hello am Levine");
}

function sayAge() {
    console.log("I guess am honest to you")
}

sayName();
sayAge();





//ES6

const name ="levine";
const age = 23;

//console.log('hello my its "hello" name is ${name} and my age is ${age}');

const details = {
    name: "levine",
    age: 24,
    course: "computer science"    
};

console.log(details.age);

const sayLocation = (location) => {
    console.log(`Am from ${location}`);
}
sayLocation('kenya');
//this and arrow operator
const person = {
    name: "Stacy",
    hobby: "sleeping",
    mood: "boored",

    sayPerson: function () {
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`my name is ${this.name}, i love ${this.hobby} and am so ${this.mood}`)
        };
        fullName()
    }
};

person.sayPerson();

//arithmetics

const add = (c=1, d=2) => {
    console.log(c+d);
};

add();


const mod = (g=5, h=7) => {
    console.log(h / g);
};

mod();

//forEach

const cereals = ["beans", "greangrams", "soyabeans"];

cereals.forEach((product, index) => {
    console.log(`the index is ${index}and the product is ${product}`)
});

const newlist = cereals.map(item => item + "millet");

console.log(newlist);

//filter...
 //const filterList = cereals.filter(item => item === "beans");

 //console.log(filterList);


 const fruits = ["Strawberries", "Mangoes", "Oranges", "Pineapples"];

 fruits.forEach((index, product) => {
     console.log(`fruit is ${index} and the product is${product}`)
 });

 const filterList = fruits.filter(item => item !=="Oranges");

 console.log(filterList);

 //classes--constructor ftns

 class shoppingList {
     constructor(items, nr) {
         this.items = items;
         this.nr = nr;
     }
     sayList() {
         console.log(this.items);
     }
 }

 const myList = new shoppingList(["milk", "bread", "coconut"], 3);

 //myList.sayList();

 class teachers {
     constructor(items, no) {
         this.items = items;
         this.no = no;
     }
     sayTeachers() {
         console.log(this.items);
     }
 }

 //const myTeachers = new teachers(["Stacy", "Raju", "Levine"], 3);
// myTeachers.sayTeachers();


 //inheritance we use extends

 class product extends teachers {
    constructor(items, no, amount, cost) {
        super(items, no);
        this.amount = amount;
        this.cost = cost;
    }
 }

 const Product = new product(["maize, millet, oats"], 4, 3, 15);

 product.sayTeachers();
  
//promises ...operation that is to finish in future

const prom = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(new Error('something went wrong'));
    }, 2000);
});

prom.then(data => {
    console.log(result);
})
.catch(err => console.log(err))


