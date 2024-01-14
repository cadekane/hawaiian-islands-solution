/* Write your code here: */

/**
 * Solutions
 * Pt1: Define Objects
 * Pt2: Store Islands in an Array
 * Pt3: Add and Edit an Attribute
 * Pt4: Stretch Goals
 */

// Pt1: Define Objects

const hawaiiIsland = {
    name: "Hawaiʻi",
    population: 200000,
    officialColor: "Red",
    nicknames: ["Big Island", "Orchid Isle"],
    famousAttractions: ["Volcanoes National Park", "Mauna Kea"],
};
  
const mauiIsland = {
    name: "Maui",
    population: 150000,
    officialColor: "Pink",
    nicknames: ["The Valley Isle"],
};

const kahoolaweIsland = {
    name: "Kahoʻolawe",
    population: 0, // Uninhabited
    officialColor: "Gray",
    nicknames: ["Target Isle"],
    environmentalFocus: "Restoration and preservation",
};

const lanaiIsland = {
    name: "Lānaʻi",
    population: 3000,
    officialColor: "Orange",
    nicknames: ["Pineapple Isle"],
    mainIndustry: "Tourism",
};

const molokaiIsland = {
    name: "Molokaʻi",
    population: 7000,
    officialColor: "Green",
    nicknames: ["The Friendly Isle"],
    culturalSignificance: "Home to ancient Hawaiian fishponds",
};

const oahuIsland = {
    name: "Oʻahu",
    officialColor: "Yellow",
    nicknames: ["The Gathering Place"],
    majorCities: ["Honolulu", "Waikiki"],
};

const kauaiIsland = {
    name: "Kauaʻi",
    population: 72000,
    officialColor: "Purple",
    nicknames: ["The Garden Isle"],
    naturalWonders: ["Na Pali Coast", "Waimea Canyon"],
};

const niihauIsland = {
    name: "Niʻihau",
    population: 130,
    officialColor: "Brown",
    nicknames: ["The Forbidden Isle"],
    uniqueCharacteristic: "Private ownership",
};

// Pt2: Store Islands in an Array

const islands = [
    hawaiiIsland,
    mauiIsland,
    kahoolaweIsland,
    lanaiIsland,
    molokaiIsland,
    oahuIsland,
    kauaiIsland,
    niihauIsland,
];

// Pt3: Add and Edit an Attribute

islandToAddProperty = islands[5]; // Oʻahu
islandToAddProperty.population = 1000000;

islandToEditProperty = islands[4]; // Molokaʻi
islandToEditProperty["culturalSignificance"] = "Kalaupapa, a small unincorporated community that served as a site for a leper colony for Hawaiians";

// Pt4: Stretch Goals

function isMaui(island) {
    return island.name === "Maui";
}

const islandToModify = islands.find(isMaui);

// Check if the island is found before adding the attribute
if (islandToModify) {
  islandToModify.attraction = "Haleakalā National Park";
  console.log("Attribute 'attraction' added to Maui:", islandToModify);
} else {
  console.log("Island 'Maui' not found in the array.");
}

/* Code to visualize your array of island objects. Do not edit */
  
  const islandsContainer = document.getElementById("islands-container");
  
  // Function to display island information dynamically in HTML
  function displayIslandInfo(island) {
    const islandDiv = document.createElement("div");
    islandDiv.classList.add("island-container");
  
    // Display island properties
    for (const property in island) {
      const propertyParagraph = document.createElement("p");
      propertyParagraph.innerHTML = `<strong>${property}:</strong> ${island[property]}`;
      islandDiv.appendChild(propertyParagraph);
    }
  
    islandsContainer.appendChild(islandDiv);
  }
  
  // Example usage: Display information for each island
  islands.forEach((island) => displayIslandInfo(island));
  