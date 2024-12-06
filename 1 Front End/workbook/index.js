const petPromise = await fetch("./data.json");
const pets = await petPromise.json();

const template = document.querySelector("#animal-card");
const container = document.createElement("div");
console.log(pets);

function checkAge(age) {
  if (!age) {
    return "Less than 1 year old";
  }
  return age > 1 ? `${age} years old` : "1 year old";
}

pets.forEach((pet) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector("h3").textContent = pet.name;

  var img = clone.querySelector("img");
  img.src = `./images/${pet.name}.webp`;
  img.alt = `a ${pet.species} named ${pet.name}`;

  clone.querySelector(".description").textContent = pet.description;

  var age = new Date().getFullYear() - pet.birthYear;
  var getAge = checkAge(age);
  clone.querySelector(".age").textContent = getAge;
  clone.querySelector(".species").textContent = pet.species;
  clone.querySelector(".primary-btn").textContent = `Adopt ${pet.name}`;
  clone.querySelector(
    ".primary-btn"
  ).href = `https://learnwebcode.github.io/pet-adoption-data/photos/${pet.id}.webp`;

  container.appendChild(clone);
});
document.querySelector(".animals-container").appendChild(container);
// console.log(container);

// git commands
// git rm --cached -r -f . :: to remove all files from staging
// git add . :: to add files to staging
// git status :: to check staging area
// git commit -m "Initial commit"
