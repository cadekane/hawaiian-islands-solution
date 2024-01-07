# Characteristics of the Hawaiian Islands

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

For each island, define at least **two** properties. These may include…
- population
- official legislated color
- nicknames or alternative names
But can encompass any attribute that can be described within the object.

// Example usage: Display information for each island
islands.forEach((island) => displayIslandInfo(island));

## Part II: Store Islands in an Array

Now that we have defined objects for each Hawaiian Island, let's organize them into an array. Create an array named islands and add each island object to it. Because we have already defined each island, we will just create the array and push each of our island objects into it.

### Visualize your array in HTML

At this point, we want to display the characteristics of our island objects. Run the HTML to see the results. 

## Part III: Add and Edit an Attribute

Now that we have our `islands` array populated with island objects, let's learn how to add and edit attributes for a specific island.

### Add an Attribute

To add a new attribute to one of the islands in our array, you can use the following steps:

1. Choose the island you want to modify in the `islands` array.
2. Use dot notation or bracket notation to add a new property to the chosen island object.

Example:
Suppose we want to add an `attraction` property to the island of "Maui" with a value of "Haleakalā National Park".

```javascript
// Find the index of the island object you want to modify
const islandToModify = islands.find((island) => island.name === "Maui");

// Check if the island is found before adding the attribute
if (islandToModify) {
  islandToModify.attraction = "Haleakalā National Park";
  console.log("Attribute 'attraction' added to Maui:", islandToModify);
} else {
  console.log("Island 'Maui' not found in the array.");
}

```

### Edit an Attribute

To edit an existing attribute for a specific island, you can simply reassign a new value to that attribute.

Example:
Let's change the population of the island of "Oʻahu" to 1,000,000.

```javascript
// Find the index of the island object you want to modify
const islandToEdit = islands.find((island) => island.name === "Oʻahu");

// Check if the island is found before editing the attribute
if (islandToEdit) {
  islandToEdit.population = 1000000;
  console.log("Population of Oʻahu updated:", islandToEdit);
} else {
  console.log("Island 'Oʻahu' not found in the array.");
}

```

## Part IV: Stretch Goals