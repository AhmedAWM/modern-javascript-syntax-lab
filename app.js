// Exercise 1
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((num) => {
    return num * 2;
});

console.log(numsTimesTwo);


// Exercise 2
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log('First ingredient: ', firstIngredient);
console.log('Second ingredient: ', secondIngredient);


// Exercise 3
const car = {
    make: 'Audi',
    model: 'Q5',
  };

const { make, model } = car;

console.log('Make: ', make);
console.log('Model: ', model);


// Exercise 4
const morePizzaToppings = ['Cheese', 'Sauce'];

const uncontroversialPizzaToppings = [...morePizzaToppings];

// Let's test!
uncontroversialPizzaToppings[1] = 'Olives';

console.log('More Pizza Toppings: ', morePizzaToppings);
console.log('Uncontrovesial Pizza Topping: ', uncontroversialPizzaToppings);



// Exercise 5
const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
  };

const myCar = { ...anotherCar, make: 'Honda', model: 'Civic' };

console.log('Another car: ', anotherCar);
console.log('My car: ', myCar);