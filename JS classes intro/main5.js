console.log("Objects containing other objects");

// Let's remember our Product class

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return this.name + " " + this.price + "€";
  }
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);
let p4 = new Product("shoes", 45);
let p5 = new Product("hoodie", 30);

// let totalPrice = p1.price + p2.price + p3.price;
// let totalPrice = p1.price + p2.price + p3.price + p4.price + p5.price;
// let totalPrice = [];

// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {
  constructor() {
    this.products = []; // empty at first
    this.total = 0;
    this.repeatingItems = 0;
    console.log(this.repeatingItems);
  }

  addProduct(product) {
    this.products.push(product);
    // console.log(this.products);
  }

  toString() {
    return "cart with: " + this.products;
  }

  totalPrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].price;
    }
    if (cart.products.length >= 5) {
      return "total price is " + (this.total / 10) * 9 + " €";
    } else {
      return "total price is " + this.total + " €";
    }
  }

  discountOnEveryFourthItem() {
    // for (let i = 0; i < this.products.length; i++) {
    // 	for (let j = this.products.length; j >= i; j--) {
    // 		if (i !== j && this.products[i].name == this.products[j].name) {
    // 			this.repeatingItems.push(this.products[i]);
    // 		}
    // 	}
    // }
    // return this.repeatingItems;
    // for (let i = 0; i < this.products.length; i++) {
    // 	if ((i % 4 >= 1) && (this.products.name[i] === this.products.name[i])) {
    // 	}
    // }
    // console.log(this.products[0].name);
    // oder wenn die summe aller gleichen items restlos durch 4 teilbar ist, dann bitte ergebnis ermitteln
    // und bis auf ohne kommastellen abrunden und so viele items nicht bepreisen
  }
}

// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p5);
cart.addProduct(p5);
cart.addProduct(p5);

console.log("We have a " + cart);
console.log(cart);

console.log(cart.products[0].price);

console.log(cart.totalPrice());
console.log(cart.products.length);
console.log(cart.products[5].name);
console.log(cart.products[3].price);

console.log(cart.repeatingItems);
