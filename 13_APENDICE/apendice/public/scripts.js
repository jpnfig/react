// 1 - Var, let e const

// 2 - Arroy function
const sum = function sum (a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

console.log(sum(5,5));
console.log(arrowSum(5,5));

// 3 - Filter

const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
    if(n>=3) {
        return n;
    }
})

console.log(highNumbers);

const users = [
    {name: "Matheus", available: true},
    {name: "Pedro", available: false},
    {name: "João", available: false},
    {name: "Marcos", available: true},
]

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - Map

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira elétrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 400, category: 'Eletro'},
    {name: 'Calça jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true;
    }
})

console.log(products)

// 5 - Templates literals

const userName = 'Matheus';
const age = 30;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);

// 6 - Destructuring

const fruits = ["Maça", "Laranja", "Mamão"];
const [f1, f2, f3] = fruits;

console.log(f2);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza",
}

const {name: productName, price, category: productCategory, color} = productDetails;

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}.`);

// 7 - Spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const carName = { name: 'Gol'}
const carBrand = { brand: 'VW'}
const otherInfos = { km: 100000, price: 49000}

const car = { ...carName, ...carBrand, ...otherInfos}

console.log(car);

// 8 - Classe

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }  
}

const shirt = new Product('Camisa gola v', 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(50));

// 9 - Herança

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price),
        this.colors = colors
    }
    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Azul", "verde"]);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();