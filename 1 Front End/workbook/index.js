const petPromise = await fetch("./data.json");
const pets = await petPromise.json();

const template = document.querySelector("#animal-card");
const container = document.createElement("div");
console.log(pets);

function findAge(age) {
  if (!age) {
    return "Less than 1 year old";
  }
  return age > 1 ? `${age} years old` : " 1 year old";
}

pets.forEach((pet) => {
  var clone = template.content.cloneNode(true);

  clone.querySelector("h3").textContent = pet.name;
  clone.querySelector(".description").textContent = pet.description;
  clone.querySelector(".species").textContent = pet.species;
  clone.querySelector(".primary-btn").innerHTML = `Adopt ${pet.name}`;
  clone.querySelector(
    ".primary-btn"
  ).href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}`;

  var img = clone.querySelector("img");
  img.src = `./images/${pet.name}.webp`;
  img.alt = `A ${pet.species} named ${pet.name}.`;

  var age = new Date().getFullYear() - pet.birthYear;
  var defineAge = findAge(age);
  clone.querySelector(".age").textContent = defineAge;

  container.appendChild(clone);
});

document.querySelector(".animals-container").appendChild(container);

function handleClickFilters(e) {
  var target = e.target;

  e.preventDefault();

  filterButtons.forEach((el) => {
    el.classList.remove("active");
  });
  target.classList.add("active");

  filterSpecies(target.dataset.filter);
}

function filterSpecies(pet) {
  var allPets = document.querySelectorAll(".animal-card");

  if (pet == "all") {
    allPets.forEach((e) => {
      e.style.display = "";
    });
  } else {
    allPets.forEach((e) => {
      if (e.querySelector(".species").textContent == pet) {
        e.style.display = "";
      } else {
        e.style.display = "none";
      }
    });
  }
}

var filterButtons = document.querySelectorAll(".filter-nav a");
filterButtons.forEach((el) => {
  el.addEventListener("click", (e) => handleClickFilters(e));
});
