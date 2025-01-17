console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Rob',
  lastName: 'Cone',
  hasSiblings: true,
  shoeCount: 20,
  favThreeFoods: ['sushi', 'pizza', 'steak']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + me.lastName;
console.log(fullName);

//added the first name and last name object. i tried adding '' in there
//get a space  in between 'me.firstName + me.lastName' and some other ideas but could
//not get the space

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log('first favorite food:', me.favThreeFoods[0] );
console.log('last favorite food:', me.favThreeFoods[2] );

// logged the array index to show my first and last fav foods

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/console.log('my current show count:', me.shoeCount);
me.shoeCount++;
console.log('updated shoe count:', me.shoeCount);

// from previous lessons i knew adding the ++ operator would add 1 more
// to what ever number variable

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
console.log('adding a new property to my "me" object');
me.favoriteColor = 'black';
console.log(me);

// through this weeks lessons i know you could add another variable to your
//existing object by adding the above code.
