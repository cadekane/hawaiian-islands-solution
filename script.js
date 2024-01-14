/* Write your code here: */

const islands = [
    {
      name: "Hawaiʻi",
      nickname: "Big Island",
      size: 4028,
      popularSpots: ["Volcanoes National Park", "Mauna Kea"],
      cities: ["Hilo", "Kailua-Kona"],
    },
    // Add more island objects with varying properties
  ];

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
  