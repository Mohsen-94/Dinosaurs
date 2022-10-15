const dinos = [
  {
    species: "Triceratops",
    weight: 13000,
    height: 114,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "First discovered in 1889 by Othniel Charles Marsh",
  },
  {
    species: "Tyrannosaurus Rex",
    weight: 11905,
    height: 144,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "The largest known skull measures in at 5 feet long.",
  },
  {
    species: "Anklyosaurus",
    weight: 10500,
    height: 55,
    diet: "herbavor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Anklyosaurus survived for approximately 135 million years.",
  },
  {
    species: "Brachiosaurus",
    weight: 70000,
    height: "372",
    diet: "herbavor",
    where: "North America",
    when: "Late Jurasic",
    fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
  },
  {
    species: "Stegosaurus",
    weight: 11600,
    height: 79,
    diet: "herbavor",
    where: "North America, Europe, Asia",
    when: "Late Jurasic to Early Cretaceous",
    fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
  },
  {
    species: "Elasmosaurus",
    weight: 16000,
    height: 59,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
  },
  {
    species: "Pteranodon",
    weight: 44,
    height: 20,
    diet: "carnivor",
    where: "North America",
    when: "Late Cretaceous",
    fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  },
  {
    species: "Pigeon",
    weight: 0.5,
    height: 9,
    diet: "herbavor",
    where: "World Wide",
    when: "Holocene",
    fact: "All birds are living dinosaurs.",
  },
];

// Create Dino Constructor
class Dinosaur {
  constructor(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
  //   a method to compare dinosaur's weight with human's weight
  compareWeight(humanWeight) {
    if (this.weight > humanWeight) {
      return `${this.species} weighs ${
        this.weight - humanWeight
      } lb more than you!`;
    } else if (this.weight < humanWeight) {
      return `You weigh ${humanWeight - this.weight} lb more than ${
        this.species
      }!`;
    } else {
      return `You weigh the same as ${this.species}!`;
    }
  }
  //   a method to compare dinosaur's height with human's height
  compareHeight(humanHeight) {
    if (this.height > humanHeight) {
      return `${this.species} is ${
        this.height - humanHeight
      } inches taller than you!`;
    } else if (this.height < humanHeight) {
      return `You are ${humanHeight - this.height} inches taller than ${
        this.species
      }!`;
    } else {
      return `You are as tall as ${this.species}!`;
    }
  }

  // a method to compare dinosaur's diet with human's diet
  compareDiet(humanDiet) {
    if (this.diet.toLowerCase() === humanDiet.toLowerCase()) {
      return `You are both ${this.diet}s!`;
    } else {
      return `You are a ${humanDiet} and ${this.species} is a ${this.diet}!`;
    }
  }
}
// Create Dino Objects from dinos array
const dinoObjects = dinos.map((dino) => {
  return new Dinosaur(
    dino.species,
    dino.weight,
    dino.height,
    dino.diet,
    dino.where,
    dino.when,
    dino.fact
  );
});

// Create Human Object
class Human {
  constructor(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
  }
}
// Use IIFE to get human data from form
const getHumanData = () =>
  (function () {
    const name = document.getElementById("name").value;
    const height =
      Number(document.getElementById("feet").value) * 12 +
      Number(document.getElementById("inches").value);
    const weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;
    return new Human(name, height, weight, diet);
  })();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array
const generateTiles = (dinoObjects, human) => {
  const grid = document.getElementById("grid");
  //   create a tile for human
  const humanTile = document.createElement("div");
  humanTile.className = "grid-item";
  humanTile.innerHTML = `<h3>${human.name}</h3>
    <img src="images/human.png" alt="human" />`;
  grid.appendChild(humanTile);
  //   create tiles for dinosaurs
  dinoObjects.forEach((dino) => {
    let fact;
    if (dino.species == "Pigeon") {
      fact = dino.fact;
    } else {
      const random = Math.floor(Math.random() * 6);
      switch (random) {
        case 0:
          fact = dino.compareWeight(human.weight);
          break;
        case 1:
          fact = dino.compareHeight(human.height);
          break;
        case 2:
          fact = dino.compareDiet(human.diet);
          break;
        case 3:
          fact = dino.fact;
          break;
        case 4:
          fact = `The ${dino.species} lived in ${dino.where}.`;
          break;
        case 5:
          fact = `The ${dino.species} lived in ${dino.when}.`;
      }
    }

    const dinoTile = document.createElement("div");
    dinoTile.className = "grid-item";
    dinoTile.innerHTML = `<h3>${dino.species}</h3>
        <img src="images/${dino.species.toLowerCase()}.png" alt="${
      dino.species
    }" />
        <p>${fact}</p>
        `;
    grid.appendChild(dinoTile);
  });
};

// Add tiles to DOM on form submit
document.getElementById("btn").addEventListener("click", () => {
  const human = getHumanData();
  generateTiles(dinoObjects, human);
  // Remove form from screen
  document.getElementById("dino-compare").style.display = "none";
});
