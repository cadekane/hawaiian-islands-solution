# Features of the Hawaiian Islands

## Objective
The objective of this activity is to familiarize learners with JavaScript objects and arrays by tasking them to define objects representing the Hawaiian Islands, organize these objects into an array, display their attributes dynamically in an HTML structure, and practice adding/editing attributes within the array.

## Difficulty
Intermediate

## Prerequisites
- Understanding of Javascript objects
- Understanding of Javascript arrays

## Concepts
- JavaScript Objects: Understanding the structure of objects, defining properties, and manipulating object attributes.
- JavaScript Arrays: Organizing multiple objects into an array, accessing array elements, and performing operations on array items.
- DOM Manipulation: Using JavaScript to dynamically create HTML elements, modify their content, and display structured information within a web page.
- Dot Notation and Bracket Notation: Accessing object properties using dot notation (object.property) and bracket notation (object['property']).
- Conditional Statements: Employing conditional statements to validate the existence of an object before adding/editing its attributes.
- Iterating Arrays: Using array methods like forEach or find to iterate through arrays and perform operations on their elements.

This activity aims to engage learners in JavaScript object manipulation, array organization, and dynamic HTML rendering while introducing them to fundamental concepts like object structure, array operations, and DOM manipulation techniques.

## Part I: Define Objects

Define an object for each Hawaiian Island.
1. Hawaiʻi
2. Maui
3. Kahoʻolawe
4. Lānaʻi
5. Molokaʻi
6. Oʻahu
7. Kauaʻi
8. Niʻihau

Recall the basic structure of an object in Javascript:

```javascript
const obj = {
  property1: value1,    // property name may be an identifier
  2: value2,            // or a number
  "property n": value3, // or a string
};
```

For each island, define at least **three** properties. The first property should be the name of the island.

The last two may include…
- population
- official legislated color
- nicknames or alternative names
- cultural significance
- famous landmarks or places

But can encompass any attribute that can be described within the object! Although it is actually possible, please do not try to include URLs to images, as they will not be successfully visualized with the code written for this challenge.

## Part II: Store Islands in an Array

Now that we have defined objects for each Hawaiian Island, let's organize them into an array. Create an array named `islands` and add each island object to it. Because we have already defined each island, we will just create the array and push each of our island objects into it.

### Visualize your array in HTML

At this point, we want to display the characteristics of our island objects. Run the HTML file to see the results.

The HTML file draws from the JavaScript script.js file you've been working on. Specifically, read the pre-written code to visualize your island information and see if you can trace how it works.

## Part III: Add and Edit an Attribute

Now that we have our `islands` array populated with island objects, let's learn how to add and edit attributes for a specific island.

### Add an Attribute

To add a new attribute to one of the islands in our array, you can use the following steps:

1. Choose the island you want to modify in the `islands` array.
2. Use dot notation or bracket notation to add a new property to the chosen island object.

**Example:**
Suppose we want to add an `attraction` property to the island of Maui with a value of "Haleakalā National Park".

- We first must access the island object. Because we know in what order we added each island, we can access them with their __index__.
- Recall that in JavaScript, indices begin at 0. Therefore, our first island is at index 0, our second island at index 1, etc.

```javascript
myIsland = islands[5];
myIslandName = myIsland.name;
print(myIslandName);
```
Assuming you added the island objects to the array in the order specified above, this will print "Oʻahu," which is the sixth island.

- You can then add your attribute by using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors">dot or bracket notation</a>.

### Edit an Attribute

To edit an existing attribute for a specific island, you can simply reassign a new value to that attribute. This is the exact same procedure as adding an attribute, except the property you're working with already exists in the object.

Edit any attribute of any island you'd like, and see the change manifest in your HTML!

## Part IV: Stretch Goals

### Add/edit an attribute using the find() method

Previously, we accessed islands using their respective index. However, we will often not know the index of an array element we want to access and manipulate. How, then, could we locate it in our array?

We can use JavaScript's <a href="https://www.w3schools.com/jsref/jsref_find.asp"> array.find() method </a>.

This method, called on an array, takes **another** function as an argument. This second function will provide a set of instructions or rules for the find() function to follow. The find() function will return the first element of the array that passes these rules.

**Example:**
Suppose we want to set the population of Oʻahu to 1000000.

- Write a function that returns a boolean value (True or False) when given an island object. It will return true if the name property of the object is "Oʻahu," and false otherwise.
- Call the find function on your `islands` array, and use the name of your boolean function as its argument. Store this in a temporary variable.
- You can now edit Oʻahu's properties using that temporary variable. Set "population" to 1000000.

Congratualations! You've completed this activity. I hope you learned something new about arrays, objects, and of course, Hawaiʻi's beautiful islands.

## Notes
- One of the great features of JavaScript is that you can pass functions as arguments to other functions. Not all languages are capable of this!

- The reason we can manipulate objects and arrays so freely is because they are <a href="https://flexiple.com/javascript/javascript-pass-by-reference-or-value#section2">passed by reference</a>. This means when you "store" an object or array in a variable, that variable doesn't actually contain the contents of the data structure. Instead, it points to a place in the computer's memory where the data is actually stored.

**Example:**
```javascript
original = …;
reference = original;
change(reference);
showData(original, reference);
```

Given one object, we set another variable to point to that object. When we change that second variable, we'll see that it also changes the first. This is because both original and reference are simply pointing to the same data. This is the same as storing our found object in a temporary variable.