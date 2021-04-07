url = "https://www.scorebat.com/video-api/v1/";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((gamedb) => {
    let separator = document.getElementById("separator");

    for (let count = 0; count < 30; count++) {
      let div = document.createElement("div");

      if (count % 2 == 0) {
        div.setAttribute("class", "containergame");
        document.body.insertBefore(div, separator);
      } else {
        div.setAttribute("class", "containergame2");
        document.body.insertBefore(div, separator);
      }
      

      div.innerHTML += `<h1 class="game-title"> ${(gamedb[count].title).toUpperCase()} </h1>`;
      div.innerHTML += `<h2 class="subtitle"> ${gamedb[count].competition.name} </h2>`;
      div.innerHTML += `<div class="videocontainer">${gamedb[count].videos[0].embed}</div>`
    }
  });
