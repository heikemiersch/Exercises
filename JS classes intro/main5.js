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

// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {
  constructor() {
    this.products = []; // empty at first
    this.total = 0;
    this.amount = {};
    // object contains product.name and product.amount
  }

  addProduct(product) {
    this.products.push(product);
    // console.log(this.products);
  }

  increaseAmount() {
    // if a product is added, amount goes to 1, if another one of same kind is added,
    //  don't add product but set amount to += amount, being plus one
    if (this.amount == undefined) {
      this.amount = 1;
    } else {
      this.amount += this.amount;
    }
    return this.amount;
  }

  toString() {
    return "cart with: " + this.products;
  }

  totalPrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.total += this.products[i].price;
    }
    if (this.products.length >= 5) {
      return "total price is " + (this.total / 10) * 9 + " €";
    } else {
      return "total price is " + this.total + " €";
    }
  }

  // determineDuplicates() {
  //   for (let i = 0; i < this.products.length; i++) {
  //     for (let j = this.products.length - 1; j >= i; j--) {
  //       // console.log(this.products[i].name)
  //       if (i !== j && this.products[i].name == this.products[j].name) {
  //         this.repeatingItems.push(this.products[i].name);
  //       }
  //     }
  //   }
  //   return this.repeatingItems;
  // }

  // problem here: method pushes exponential amount into the array.  
  // so adding products to the cart, results in 1 3 6 10 15 21

  // discountOnEveryFourthItem() {
  //   for (let i = 0; i < this.products.length; i++) {
  //     if ((i / 4 >= 1) && (this.products.name[i] === this.products.name[i])) {}
  //   }
  // console.log(this.products[0].name);
  // or if the sum of all repeating items is divisible by four, determine result and mathfloor it,
  // then multiply new result by price
  // }
}

// We can create a cart and add the products we created before

let cart = new ShoppingCart();

cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p5);

console.log("We have a " + cart);
console.log(cart);

console.log(cart.products[0].price);

console.log(cart.totalPrice());
console.log(cart.products.length);
console.log(cart.products[3].name);
console.log(cart.products[3].price);

cart.increaseAmount();
console.log(cart.amount);

console.log(cart.total);