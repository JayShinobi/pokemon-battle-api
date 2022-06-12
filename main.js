//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const poke1 = document.querySelector("#poke1").value;
  const poke2 = document.querySelector("#poke2").value;
  let pokePower = [];
  let pokeName = [];
  let pokeImg = [];

  fetch(`https://pokeapi.co/api/v2/pokemon/${poke1}`) //fetch
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      pokeName.push(data.species.name);
      pokePower.push(data.stats[0].base_stat); // getting hit power stat
      pokeImg.push(data.sprites.front_shiny);

      fetch(`https://pokeapi.co/api/v2/pokemon/${poke2}`) //fetch
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          console.log(data);

          pokeName.push(data.species.name);
          pokePower.push(data.stats[0].base_stat); // hit power stat for pokemon 2
          pokeImg.push(data.sprites.front_shiny);
          // compare each pokemon which pokemon has nore HP to determine the tougher pokemon
          if (pokePower[0] > pokePower[1]) {
            document.querySelector("#pokeImg1").src = pokeImg[0];

            document.querySelector("h2").innerText = pokeName[0];
            document.querySelector("h3").innerText =
              "Total Hit Power 🔥: " + pokePower[0];
          } else {
            document.querySelector("#pokeImg1").src = pokeImg[1];
            document.querySelector("h2").innerText = pokeName[1];
            document.querySelector("h3").innerText =
              "Total Hit Power 🔥 : " + pokePower[1];
          }
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}