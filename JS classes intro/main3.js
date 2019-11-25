console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
		this.speed = 0;
	}

	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		while (this.speed > 0) this.speed -= amount;
	}

	stop() {
		// if (this.speed > 0) this.speed -= 0;
		// this.speed -= this.speed;
	}

	boolean() {
		if (this.speed > 0) {
			return this.brand + " " + this.model + " is running";
		} else {
			return this.brand + " " + this.model + " is not running";
		}
	}

	status() {
		return this.brand + " " + this.model + " running at " + this.speed + " km/h";
	}
}


// Now we use create a Car object using the class

var car = new Car("Ford", "Mondeo");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.boolean();
console.log(car.boolean());
car.accelerate(100);
console.log(car.status());
car.boolean();
console.log(car.boolean());
car.brake(25);
console.log(car.status());
car.boolean();
console.log(car.boolean());
car.brake(130);
console.log(car.status());
car.boolean();
console.log(car.boolean());
car.stop(250);
console.log(car.status());
car.boolean();
console.log(car.boolean());

// We may create other cars easily

var car2 = new Car("Ferrari", "Roma");
car2.accelerate(200);
console.log(car2.status());
car2.boolean();
console.log(car2.boolean());


class TV {

	// The constructor initializes the properties.
	// It gets called when we do: new TV(some_brand)
	constructor(brand) {
		this.brand = brand;
		this.channel = 1;
		this.volume = 50;
		this.resetChannel = this.channel;
		this.resetVolume = this.volume;
	}

	// methods:
	increaseVolume(amount) {
		if ((this.volume + amount) < 100) {
			this.volume += amount;
		} else {
			this.volume;
		}
	}

	decreaseVolume(amount) {
		if ((this.volume - amount) > 0) {
			this.volume -= amount
		} else {
			this.volume;
		}
	}

	increaseChannel(amount) {
		if ((this.channel + amount) < 50) {
			this.channel += amount
		} else {
			this.channel;
		}
	}

	decreaseChannel(amount) {
		if ((this.channel - amount) > 0) {
			this.channel -= amount
		} else {
			this.channel;
		}
	}

	reset() {
		this.channel = this.resetChannel;
		this.volume = this.resetVolume;
	}

	status() {
		return this.brand + " at channel " + this.channel + " and volume " + this.volume;
	}
}

let tv = new TV("LG");

console.log(tv.status());
tv.increaseVolume(2);
console.log(tv.status());
tv.decreaseVolume(44);
console.log(tv.status());
tv.increaseChannel(30);
console.log(tv.status());
tv.increaseChannel(20);
console.log(tv.status());
tv.reset();
console.log(tv.status());
tv.increaseChannel(5);
tv.increaseVolume(12);
console.log(tv.status());
tv.reset();
console.log(tv.status());